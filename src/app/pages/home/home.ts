import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  categories: Category[] = [];
  featuredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.productsService.getCategories();
    this.featuredProducts = this.productsService.getFeaturedProducts();
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
}
