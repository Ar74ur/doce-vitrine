import { Injectable } from '@angular/core';
import { Product, Category } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private categories: Category[] = [
    { id: 1, name: 'Bolos', icon: '🎂' },
    { id: 2, name: 'Brigadeiros', icon: '🍫' },
    { id: 3, name: 'Tortas', icon: '🥧' },
    { id: 4, name: 'Cupcakes', icon: '🧁' },
    { id: 5, name: 'Cookies', icon: '🍪' },
    { id: 6, name: 'Docinhos', icon: '🍬' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Bolo de Chocolate',
      description: 'Delicioso bolo de chocolate com cobertura cremosa e granulado',
      price: 45.90,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
      category: 'Bolos',
      featured: true
    },
    {
      id: 2,
      name: 'Brigadeiro Gourmet',
      description: 'Brigadeiros artesanais com chocolate belga, caixa com 15 unidades',
      price: 25.00,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400',
      category: 'Brigadeiros',
      featured: true
    },
    {
      id: 3,
      name: 'Torta de Morango',
      description: 'Torta cremosa com morangos frescos e chantilly',
      price: 55.00,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
      category: 'Tortas',
      featured: false
    },
    {
      id: 4,
      name: 'Cupcake Red Velvet',
      description: 'Cupcake red velvet com cream cheese, caixa com 6 unidades',
      price: 32.00,
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400',
      category: 'Cupcakes',
      featured: true
    },
    {
      id: 5,
      name: 'Cookies de Chocolate',
      description: 'Cookies crocantes com gotas de chocolate, pacote com 12 unidades',
      price: 18.00,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
      category: 'Cookies',
      featured: false
    },
    {
      id: 6,
      name: 'Bolo de Cenoura',
      description: 'Bolo de cenoura tradicional com cobertura de chocolate',
      price: 38.00,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
      category: 'Bolos',
      featured: false
    },
    {
      id: 7,
      name: 'Docinhos Variados',
      description: 'Mix de docinhos de festa: brigadeiro, beijinho e cajuzinho - 30 unidades',
      price: 42.00,
      image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?w=400',
      category: 'Docinhos',
      featured: true
    },
    {
      id: 8,
      name: 'Torta de Limão',
      description: 'Torta de limão com merengue italiano',
      price: 48.00,
      image: 'https://images.unsplash.com/photo-1519915212116-715fb0215297?w=400',
      category: 'Tortas',
      featured: false
    },
    {
      id: 9,
      name: 'Bolo Prestígio',
      description: 'Bolo de chocolate com recheio de coco e cobertura de chocolate',
      price: 52.00,
      image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400',
      category: 'Bolos',
      featured: true
    },
    {
      id: 10,
      name: 'Cupcake de Baunilha',
      description: 'Cupcakes delicados de baunilha com buttercream - 6 unidades',
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400',
      category: 'Cupcakes',
      featured: false
    },
    {
      id: 11,
      name: 'Brownie Recheado',
      description: 'Brownies recheados com doce de leite e nozes',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4cff5bf4?w=400',
      category: 'Cookies',
      featured: true
    },
    {
      id: 12,
      name: 'Torta Holandesa',
      description: 'Torta holandesa tradicional com creme e raspas de chocolate',
      price: 58.00,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
      category: 'Tortas',
      featured: false
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    if (!category || category === 'Todos') {
      return this.products;
    }
    return this.products.filter(p => p.category === category);
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(p => p.featured);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(term: string): Product[] {
    const termLower = term.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(termLower) ||
      p.description.toLowerCase().includes(termLower) ||
      p.category.toLowerCase().includes(termLower)
    );
  }
}
