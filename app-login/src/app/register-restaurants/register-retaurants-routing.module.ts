import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterRestaurantsComponent } from './register-restaurants.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'register-restaurants', component: RegisterRestaurantsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RegisterRestaurantsRoutingModule { }
