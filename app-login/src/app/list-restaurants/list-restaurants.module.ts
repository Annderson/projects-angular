import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from './list-restaurants.component';
import { ListRestaurantsRoutingModule } from './list-restaurants-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRestaurantsRoutingModule
  ],
  declarations: [
    ListRestaurantsComponent
  ],
  exports: [
    ListRestaurantsComponent
  ]
})
export class ListRestaurantsModule { }
