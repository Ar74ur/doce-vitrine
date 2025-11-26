import { Injectable, signal, computed } from '@angular/core';
import { Product, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<CartItem[]>([]);

  cartItems = this.items.asReadonly();

  totalItems = computed(() =>
    this.items().reduce((total, item) => total + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.items().reduce((total, item) => total + (item.product.price * item.quantity), 0)
  );

  constructor() { }

  addItem(produto: Product, quantidade: number = 1) {
    const currentItems = this.items();
    const existingItem = currentItems.find(item => item.product.id === produto.id);

    if (existingItem) {
      this.items.set(
        currentItems.map(item =>
          item.product.id === produto.id
            ? { ...item, quantity: item.quantity + quantidade }
            : item
        )
      );
    } else {
      this.items.set([...currentItems, { product: produto, quantity: quantidade }]);
    }
  }

  removeItem(productId: number) {
    this.items.set(this.items().filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: number, quantidade: number) {
    if (quantidade <= 0) {
      this.removeItem(productId);
      return;
    }

    this.items.set(
      this.items().map(item =>
        item.product.id === productId
          ? { ...item, quantity: quantidade }
          : item
      )
    );
  }

  clearCart() {
    this.items.set([]);
  }
}

