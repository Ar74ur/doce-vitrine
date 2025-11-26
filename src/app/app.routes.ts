import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/products/products').then(m => m.Produtos)
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProdutoDetalhe)
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./pages/cart/cart').then(m => m.Carrinho)
  }
];
