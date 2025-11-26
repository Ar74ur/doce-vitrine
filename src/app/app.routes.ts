import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/selecionar-confeiteiro', pathMatch: 'full' },
  {
    path: 'selecionar-confeiteiro',
    loadComponent: () => import('./pages/confectioner-selector/confectioner-selector').then(m => m.ConfectionerSelectorComponent)
  },
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
  },
  {
    path: 'alternar-usuario',
    loadComponent: () => import('./pages/user-switcher/user-switcher').then(m => m.UserSwitcherComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then(m => m.AdminComponent)
  }
];
