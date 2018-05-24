import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuemmSomosComponent } from './quemm-somos.component';
import { QuemmSomosRoutingModule } from './quemm-somos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuemmSomosRoutingModule
  ],
  declarations: [
    QuemmSomosComponent
  ]
})
export class QuemmSomosModule { }
