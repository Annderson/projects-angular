import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';

import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { GiphyListModule } from './giphy/giphy-list/giphy-list.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    GiphySearchManualModule,
    GiphyListModule,
    LoginModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
