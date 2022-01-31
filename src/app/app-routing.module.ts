import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { ClientesComponent } from "./views/admin/clientes/clientes.component";
import { ComprasComponent } from "./views/admin/compras/compras.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { EmpleadosComponent } from "./views/admin/empleados/empleados.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { MiperfilComponent } from "./views/admin/miperfil/miperfil.component";
import { ProductosComponent } from "./views/admin/productos/productos.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";
import { VentasComponent } from "./views/admin/ventas/ventas.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "clientes", component: ClientesComponent },
      { path: "productos", component: ProductosComponent },
      { path: "compras", component: ComprasComponent },
      { path: "ventas", component: VentasComponent },
      { path: "empleados", component: EmpleadosComponent },
      { path: "miperfil", component: MiperfilComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
