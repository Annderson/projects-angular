import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoriteRestaurantsComponent } from './favorite-restaurants.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'favorities', component: FavoriteRestaurantsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class FavoriteRestaurantsRoutingModule { }
