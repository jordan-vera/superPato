import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Panel',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/admin/productos', title: 'Productos',  icon:'ni-app text-blue', class: '' },
    { path: '/admin/clientes', title: 'Clientes',  icon:'ni-single-02 text-orange', class: '' },
    { path: '/admin/proveedores', title: 'Proveedores',  icon:'ni-shop text-yellow', class: '' },
    { path: '/admin/compras', title: 'Compras',  icon:'ni-basket text-red', class: '' },
    { path: '/admin/ventas', title: 'Ventas',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/admin/perfil', title: 'Perfil',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/login', title: 'Cerrar Sesión',  icon:'ni-key-25 text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
