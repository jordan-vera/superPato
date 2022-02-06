import { Routes } from '@angular/router';

export const AuthLayoutRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'index',
    loadChildren: () => import('src/app/pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'show-producto/:idproducto',
    loadChildren: () => import('src/app/pages/show-producto/show-producto.module').then(m => m.ShowProductoModule)
  },
];
