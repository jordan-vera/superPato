import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutes } from './auth-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
  ],
  declarations: [
  ]
})
export class AuthLayoutModule { }
