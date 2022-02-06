import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowProductoRoutingModule } from './show-producto-routing.module';
import { ShowProductoComponent } from './show-producto.component';
import { AlertifyService } from 'src/app/services/alertify.service';


@NgModule({
  declarations: [ShowProductoComponent],
  imports: [
    CommonModule,
    ShowProductoRoutingModule
  ],
  providers: [AlertifyService]
})
export class ShowProductoModule { }
