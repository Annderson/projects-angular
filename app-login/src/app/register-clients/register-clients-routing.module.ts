import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterClientsComponent } from './register-clients.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      { path: 'resgister-clients', component: RegisterClientsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RegisterClientsRoutingModule { }
