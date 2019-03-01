import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CustomerComponent } from './pages/customer/customer.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CustomerComponent,
  ],
  imports: [
    ShareModule,
    LeafletModule.forRoot(),
    HomeRoutingModule,
  ],
  exports: [
    LeafletModule
  ],
  providers: []
})
export class HomeModule { }
