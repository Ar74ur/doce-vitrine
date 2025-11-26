import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { ConfectionerService } from '../../services/confectioner.service';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private confectionerService = inject(ConfectionerService);
  
  categories: Category[] = [];
  featuredProducts: Product[] = [];
  searchTerm: string = '';
  confectionerName = '';

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    const selectedConfectioner = this.confectionerService.selectedConfectioner();
    
    if (!selectedConfectioner) {
      this.router.navigate(['/selecionar-confeiteiro']);
      return;
    }
    
    this.confectionerName = selectedConfectioner.name;
    this.categories = this.productsService.getCategories();
    this.featuredProducts = this.productsService.getFeaturedProducts(selectedConfectioner.id);
  }

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/produtos'], { queryParams: { busca: this.searchTerm } });
    }
  }

  filterByCategory(category: string) {
    this.router.navigate(['/produtos'], { queryParams: { categoria: category } });
  }

  viewProduct(id: number) {
    this.router.navigate(['/produto', id]);
  }

  addToCart(event: Event, produto: Product) {
    event.stopPropagation();
    this.cartService.addItem(produto, 1);
  }

  changeConfectioner() {
    this.confectionerService.clearSelection();
    this.router.navigate(['/selecionar-confeiteiro']);
  }
}
