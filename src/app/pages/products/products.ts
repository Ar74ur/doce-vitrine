import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Produtos implements OnInit {
  categories: Category[] = [];
  filteredProducts: Product[] = [];
  allProducts: Product[] = [];
  searchTerm: string = '';
  categoryFilter: string = 'Todos';

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categories = this.productsService.getCategories();
    this.allProducts = this.productsService.getProducts();
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
    this.filteredProducts = this.productsService.getProductsByCategory(categoria);
  }

  searchProducts() {
    if (this.searchTerm.trim()) {
      this.categoryFilter = 'Todos';
      this.filteredProducts = this.productsService.searchProducts(this.searchTerm);
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
