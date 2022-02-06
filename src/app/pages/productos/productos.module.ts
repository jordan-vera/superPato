import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { FormsModule } from '@angular/forms';
import { NgxImageCompressService } from "ngx-image-compress";
import { AlertifyService } from 'src/app/services/alertify.service';

@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ],
  providers: [
    NgxImageCompressService,
    AlertifyService
  ]
})
export class ProductosModule { }
