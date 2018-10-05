import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { ListRestaurantsModule } from './list-restaurants/list-restaurants.module';
import { RegisterClientsModule } from './register-clients/register-clients.module';
import { RegisterRestaurantsModule } from './register-restaurants/register-restaurants.module';
import { FavoriteRestaurantsModule } from './favorite-restaurants/favorite-restaurants.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoginModule,
    HttpModule,
    RegisterClientsModule,
    ListRestaurantsModule,
    FavoriteRestaurantsModule,
    RegisterRestaurantsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
