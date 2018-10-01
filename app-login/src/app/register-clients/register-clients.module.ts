import { RegisterClientsRoutingModule } from './register-clients-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterClientsComponent } from './register-clients.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterClientsRoutingModule
  ],
  declarations: [
    RegisterClientsComponent
  ],
  exports: [
    RegisterClientsComponent
  ]
})
export class RegisterClientsModule { }
