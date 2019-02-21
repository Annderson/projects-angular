import { ActionBarComponent } from './../component/action-bar/action-bar.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CustomerComponent,
    ActionBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
  ],
  exports: [
  ],
  providers: []
})
export class HomeModule { }
