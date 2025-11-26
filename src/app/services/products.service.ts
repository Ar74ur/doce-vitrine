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
    // Produtos da Doces da Maria (confectionerId: 1)
    {
      id: 1,
      name: 'Bolo de Chocolate',
      description: 'Delicioso bolo de chocolate com cobertura cremosa e granulado',
      price: 45.90,
      image: '/images/produtos/bolo_de_chocolate.jpg',
      category: 'Bolos',
      featured: true,
      confectionerId: 1
    },
    {
      id: 2,
      name: 'Brigadeiro Gourmet',
      description: 'Brigadeiros artesanais com chocolate belga, caixa com 15 unidades',
      price: 25.00,
      image: '/images/produtos/brigadeiro_gourmet.jpg',
      category: 'Brigadeiros',
      featured: true,
      confectionerId: 1
    },
    {
      id: 3,
      name: 'Torta de Morango',
      description: 'Torta cremosa com morangos frescos e chantilly',
      price: 55.00,
      image: '/images/produtos/tortas_de_morango.png',
      category: 'Tortas',
      featured: false,
      confectionerId: 1
    },
    {
      id: 4,
      name: 'Cupcake Red Velvet',
      description: 'Cupcake red velvet com cream cheese, caixa com 6 unidades',
      price: 32.00,
      image: '/images/produtos/cupcake_red_velvet.jpg',
      category: 'Cupcakes',
      featured: true,
      confectionerId: 1
    },
    {
      id: 5,
      name: 'Cookies de Chocolate',
      description: 'Cookies crocantes com gotas de chocolate, pacote com 12 unidades',
      price: 18.00,
      image: '/images/produtos/cookies_de_chocolate.jpg',
      category: 'Cookies',
      featured: false,
      confectionerId: 1
    },
    {
      id: 6,
      name: 'Bolo de Cenoura',
      description: 'Bolo de cenoura tradicional com cobertura de chocolate',
      price: 38.00,
      image: '/images/produtos/bolo_de_cenoura.png',
      category: 'Bolos',
      featured: false,
      confectionerId: 1
    },
    {
      id: 7,
      name: 'Docinhos Variados',
      description: 'Mix de docinhos de festa: brigadeiro, beijinho e cajuzinho - 30 unidades',
      price: 42.00,
      image: '/images/produtos/docinhos_variados.jpg',
      category: 'Docinhos',
      featured: true,
      confectionerId: 1
    },
    {
      id: 8,
      name: 'Torta de Limão',
      description: 'Torta de limão com merengue italiano',
      price: 48.00,
      image: '/images/produtos/torta_de_limao.jpg',
      category: 'Tortas',
      featured: false,
      confectionerId: 1
    },
    {
      id: 9,
      name: 'Bolo Prestígio',
      description: 'Bolo de chocolate com recheio de coco e cobertura de chocolate',
      price: 52.00,
      image: '/images/produtos/bolo_prestigio.webp',
      category: 'Bolos',
      featured: true,
      confectionerId: 1
    },
    {
      id: 10,
      name: 'Cupcake de Baunilha',
      description: 'Cupcakes delicados de baunilha com buttercream - 6 unidades',
      price: 28.00,
      image: '/images/produtos/cupcake_de_baunilha.jpg',
      category: 'Cupcakes',
      featured: false,
      confectionerId: 1
    },
    {
      id: 11,
      name: 'Brownie Recheado',
      description: 'Brownies recheados com doce de leite e nozes',
      price: 35.00,
      image: '/images/produtos/brownie_recheado.jpg',
      category: 'Cookies',
      featured: true,
      confectionerId: 1
    },
    {
      id: 12,
      name: 'Torta Holandesa',
      description: 'Torta holandesa tradicional com creme e raspas de chocolate',
      price: 58.00,
      image: '/images/produtos/torta_holandesa.jpg',
      category: 'Tortas',
      featured: false,
      confectionerId: 1
    },

    // Produtos da Confeitaria Estrela (confectionerId: 2)
    {
      id: 13,
      name: 'Macaron Sortido',
      description: 'Macarons franceses artesanais em sabores variados - caixa com 12 unidades',
      price: 45.00,
      image: '/images/produtos/macaron_sortido.jpg',
      category: 'Docinhos',
      featured: true,
      confectionerId: 2
    },
    {
      id: 14,
      name: 'Bolo de Casamento Personalizado',
      description: 'Bolo elegante de 3 andares com decoração personalizada',
      price: 450.00,
      image: '/images/produtos/bolo_de_casamento_personalizado.jpg',
      category: 'Bolos',
      featured: true,
      confectionerId: 2
    },
    {
      id: 15,
      name: 'Bomba de Chocolate',
      description: 'Bomba recheada com creme e cobertura de chocolate belga',
      price: 38.00,
      image: '/images/produtos/bomba_de_chocolate.jpg',
      category: 'Docinhos',
      featured: true,
      confectionerId: 2
    },
    {
      id: 16,
      name: 'Torta Floresta Negra',
      description: 'Torta clássica com camadas de chocolate, cereja e chantilly',
      price: 65.00,
      image: '/images/produtos/torta_floresta_negra.jpeg',
      category: 'Tortas',
      featured: false,
      confectionerId: 2
    },
    {
      id: 17,
      name: 'Trufas Premium',
      description: 'Trufas artesanais de chocolate nobre em sabores exclusivos - caixa 20 un',
      price: 55.00,
      image: '/images/produtos/trufas_premium.jpg',
      category: 'Brigadeiros',
      featured: true,
      confectionerId: 2
    },
    {
      id: 18,
      name: 'Mini Tortinhas Sortidas',
      description: 'Seleção de mini tortinhas: limão, morango, chocolate e frutas vermelhas',
      price: 48.00,
      image: '/images/produtos/mini_tortinhas_sortidas.jpg',
      category: 'Tortas',
      featured: false,
      confectionerId: 2
    },
    {
      id: 19,
      name: 'Cupcake de Ferrero Rocher',
      description: 'Cupcakes premium com cobertura de nutella e Ferrero Rocher - 6 un',
      price: 42.00,
      image: '/images/produtos/cupcake_de_ferrero_rocher.jpg',
      category: 'Cupcakes',
      featured: true,
      confectionerId: 2
    },
    {
      id: 20,
      name: 'Naked Cake Frutas Vermelhas',
      description: 'Bolo rústico decorado com frutas vermelhas frescas e flores comestíveis',
      price: 85.00,
      image: '/images/produtos/naked_cake_frutas_vermelhas.jpg',
      category: 'Bolos',
      featured: true,
      confectionerId: 2
    }
  ];

  constructor() {
    this.loadProducts();
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByConfectioner(confectionerId: number): Product[] {
    return this.products.filter(p => p.confectionerId === confectionerId);
  }

  getProductsByCategory(category: string, confectionerId?: number): Product[] {
    let filtered = this.products;

    if (confectionerId) {
      filtered = filtered.filter(p => p.confectionerId === confectionerId);
    }

    if (!category || category === 'Todos') {
      return filtered;
    }
    return filtered.filter(p => p.category === category);
  }

  getFeaturedProducts(confectionerId?: number): Product[] {
    let filtered = this.products.filter(p => p.featured);

    if (confectionerId) {
      filtered = filtered.filter(p => p.confectionerId === confectionerId);
    }

    return filtered;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(term: string, confectionerId?: number): Product[] {
    const termLower = term.toLowerCase();
    let filtered = this.products.filter(p =>
      p.name.toLowerCase().includes(termLower) ||
      p.description.toLowerCase().includes(termLower) ||
      p.category.toLowerCase().includes(termLower)
    );

    if (confectionerId) {
      filtered = filtered.filter(p => p.confectionerId === confectionerId);
    }

    return filtered;
  }

  // Métodos para o confeiteiro gerenciar produtos
  addProduct(product: Omit<Product, 'id'>): Product {
    const newId = Math.max(...this.products.map(p => p.id)) + 1;
    const newProduct: Product = { ...product, id: newId };
    this.products.push(newProduct);
    this.saveProducts();
    return newProduct;
  }

  updateProduct(id: number, product: Partial<Product>): Product | null {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.products[index] = { ...this.products[index], ...product, id };
    this.saveProducts();
    return this.products[index];
  }

  deleteProduct(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    this.saveProducts();
    return true;
  }

  private saveProducts(): void {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  private loadProducts(): void {
    const saved = localStorage.getItem('products');
    if (saved) {
      try {
        const parsedProducts = JSON.parse(saved);
        // Verifica se os produtos tem confectionerId antes de carregar
        if (parsedProducts.length > 0 && parsedProducts[0].confectionerId !== undefined) {
          this.products = parsedProducts;
        }
      } catch (e) {
        console.error('Erro ao carregar produtos do localStorage', e);
      }
    }
  }
}
