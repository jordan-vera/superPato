import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductoComponent } from './show-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ShowProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowProductoRoutingModule { }
