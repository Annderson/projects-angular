import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from './list-restaurants.component';
import { ListRestaurantsRoutingModule } from './list-restaurants-routing.module';
import { ListService } from '../service/list.service';

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
  ],
  providers: [
    ListService
  ]
})
export class ListRestaurantsModule { }
