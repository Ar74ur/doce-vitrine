import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class AdminComponent {
  private productsService = inject(ProductsService);
  private authService = inject(AuthService);
  private router = inject(Router);

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  showForm = signal(false);
  editingProduct = signal<Product | null>(null);

  formData = {
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    featured: false
  };

  imagePreview = signal<string>('');
  uploadMethod = signal<'url' | 'file'>('url');

  ngOnInit() {
    // Verifica se é confeiteiro
    if (!this.authService.isConfectioner()) {
      this.router.navigate(['/']);
      return;
    }

    this.loadData();
  }

  loadData() {
    const confectionerId = this.authService.getCurrentConfectionerId();
    if (confectionerId) {
      this.products.set(this.productsService.getProductsByConfectioner(confectionerId));
    }
    this.categories.set(this.productsService.getCategories());
  }

  openForm(product?: Product) {
    if (product) {
      this.editingProduct.set(product);
      this.formData = {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category,
        featured: product.featured
      };
      this.imagePreview.set(product.image);
      this.uploadMethod.set(product.image.startsWith('data:') ? 'file' : 'url');
    } else {
      this.editingProduct.set(null);
      this.resetForm();
    }
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
    this.editingProduct.set(null);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      description: '',
      price: 0,
      image: '',
      category: '',
      featured: false
    };
    this.imagePreview.set('');
    this.uploadMethod.set('url');
  }

  saveProduct() {
    if (!this.formData.name || !this.formData.category || this.formData.price <= 0) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const confectionerId = this.authService.getCurrentConfectionerId();
    if (!confectionerId) {
      alert('Erro: confeiteiro não identificado');
      return;
    }

    const editing = this.editingProduct();
    if (editing) {
      this.productsService.updateProduct(editing.id, this.formData);
    } else {
      const productData = { ...this.formData, confectionerId };
      this.productsService.addProduct(productData);
    }

    this.loadData();
    this.closeForm();
  }

  deleteProduct(id: number) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.productsService.deleteProduct(id);
      this.loadData();
    }
  }

  toggleFeatured(product: Product) {
    this.productsService.updateProduct(product.id, { featured: !product.featured });
    this.loadData();
  }

  onImageFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Validar tipo de arquivo
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem');
        return;
      }
      
      // Validar tamanho (máximo 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 2MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        this.formData.image = result;
        this.imagePreview.set(result);
      };
      reader.readAsDataURL(file);
    }
  }

  setUploadMethod(method: 'url' | 'file'): void {
    this.uploadMethod.set(method);
    if (method === 'file') {
      this.formData.image = '';
      this.imagePreview.set('');
    }
  }

  updateImagePreview(): void {
    if (this.uploadMethod() === 'url' && this.formData.image) {
      this.imagePreview.set(this.formData.image);
    }
  }
}
