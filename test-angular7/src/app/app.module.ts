import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from './share/share.module';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
  ],
  imports: [
    ShareModule,
    BrowserModule,
    LeafletModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
