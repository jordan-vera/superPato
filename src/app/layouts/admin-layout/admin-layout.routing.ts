import { Routes } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'productos',
        loadChildren: () => import('src/app/pages/productos/productos.module').then(m => m.ProductosModule)
    },
    {
        path: 'clientes',
        loadChildren: () => import('src/app/pages/clientes/clientes.module').then(m => m.ClientesModule)
    },
    {
        path: 'proveedores',
        loadChildren: () => import('src/app/pages/proveedores/proveedores.module').then(m => m.ProveedoresModule)
    },
    {
        path: 'compras',
        loadChildren: () => import('src/app/pages/compras/compras.module').then(m => m.ComprasModule)
    },
    {
        path: 'ventas',
        loadChildren: () => import('src/app/pages/ventas/ventas.module').then(m => m.VentasModule)
    },
    {
        path: 'perfil',
        loadChildren: () => import('src/app/pages/perfil/perfil.module').then(m => m.PerfilModule)
    },
];
