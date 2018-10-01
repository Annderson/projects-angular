import { RegisterRestaurantsComponent } from './register-restaurants.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRestaurantsRoutingModule } from './register-retaurants-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRestaurantsRoutingModule
  ],
  declarations: [
    RegisterRestaurantsComponent
  ],
  exports: [
    RegisterRestaurantsComponent
  ]
})
export class RegisterRestaurantsModule { }
