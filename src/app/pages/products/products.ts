import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { ConfectionerService } from '../../services/confectioner.service';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Produtos implements OnInit {
  private confectionerService = inject(ConfectionerService);
  
  categories: Category[] = [];
  filteredProducts: Product[] = [];
  allProducts: Product[] = [];
  searchTerm: string = '';
  categoryFilter: string = 'Todos';
  confectionerId: number | null = null;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const selectedConfectioner = this.confectionerService.selectedConfectioner();
    
    if (!selectedConfectioner) {
      this.router.navigate(['/selecionar-confeiteiro']);
      return;
    }
    
    this.confectionerId = selectedConfectioner.id;
    this.categories = this.productsService.getCategories();
    this.allProducts = this.productsService.getProductsByConfectioner(this.confectionerId);
    this.filteredProducts = this.allProducts;

    // Verificar query params para filtrar
    this.route.queryParams.subscribe(params => {
      if (params['categoria']) {
        this.categoryFilter = params['categoria'];
        this.filterByCategory(this.categoryFilter);
      }
      if (params['busca']) {
        this.searchTerm = params['busca'];
        this.searchProducts();
      }
    });
  }

  filterByCategory(categoria: string) {
    this.categoryFilter = categoria;
    this.searchTerm = '';
    this.filteredProducts = this.productsService.getProductsByCategory(categoria, this.confectionerId || undefined);
  }

  searchProducts() {
    if (this.searchTerm.trim()) {
      this.categoryFilter = 'Todos';
      this.filteredProducts = this.productsService.searchProducts(this.searchTerm, this.confectionerId || undefined);
    } else {
      this.filteredProducts = this.allProducts;
    }
  }

  viewProduct(id: number) {
    this.router.navigate(['/produto', id]);
  }

  addToCart(event: Event, produto: Product) {
    event.stopPropagation();
    this.cartService.addItem(produto, 1);
  }

}
