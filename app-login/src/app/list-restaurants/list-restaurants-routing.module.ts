import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListRestaurantsComponent } from './list-restaurants.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'list-restaurants', component: ListRestaurantsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ListRestaurantsRoutingModule { }
