import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteRestaurantsRoutingModule } from './favorite-restaurants-routing.module';
import { FavoriteRestaurantsComponent } from './favorite-restaurants.component';

@NgModule({
  imports: [
    CommonModule,
    FavoriteRestaurantsRoutingModule
  ],
  declarations: [
    FavoriteRestaurantsComponent
  ],
  exports: [
    FavoriteRestaurantsComponent
  ]
})
export class FavoriteRestaurantsModule { }
