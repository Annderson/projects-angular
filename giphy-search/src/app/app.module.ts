import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { OAuthModule } from 'angular-oauth2-oidc'
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NavManuModule } from './nav-manu/nav-manu.module';
import { GiphyListModule } from './giphy/giphy-list/giphy-list.module';
import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { FachadaComponent } from './fachada/fachada.component';


@NgModule({
  declarations: [ AppComponent, FachadaComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    LoginModule,
    NavManuModule,
    GiphyListModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    GiphySearchManualModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
