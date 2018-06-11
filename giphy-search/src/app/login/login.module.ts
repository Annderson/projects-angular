import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [ CommonModule, LoginRoutingModule ],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
