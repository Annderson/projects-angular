import { MessangerModule } from './messanger/messanger.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GiphySearchManualModule,
    MessangerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
