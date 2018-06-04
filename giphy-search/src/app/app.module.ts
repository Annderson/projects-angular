import { GiphyListModule } from './giphy/giphy-list/giphy-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { HttpModule } from '@angular/http';
import { GiphyListComponent } from './giphy/giphy-list/giphy-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GiphySearchManualModule,
    GiphyListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
