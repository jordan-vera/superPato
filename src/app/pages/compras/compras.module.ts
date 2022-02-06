import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ComprasComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    FormsModule
  ]
})
export class ComprasModule { }
