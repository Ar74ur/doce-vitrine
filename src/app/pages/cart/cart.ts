import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Carrinho {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.cartItems;
  }

  get totalItems() {
    return this.cartService.totalItems;
  }

  get totalPrice() {
    return this.cartService.totalPrice;
  }

  increaseQuantity(produtoId: number) {
    const item = this.cartItems().find(i => i.product.id === produtoId);
    if (item) {
      this.cartService.updateQuantity(produtoId, item.quantity + 1);
    }
  }

  decreaseQuantity(produtoId: number) {
    const item = this.cartItems().find(i => i.product.id === produtoId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(produtoId, item.quantity - 1);
    }
  }

  removeItem(produtoId: number) {
    this.cartService.removeItem(produtoId);
  }

  clearCart() {
    if (confirm('Deseja realmente limpar o carrinho?')) {
      this.cartService.clearCart();
    }
  }

  checkout() {
    alert('🎉 Pedido finalizado! Em breve entraremos em contato.');
    this.cartService.clearCart();
  }

}
