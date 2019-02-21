import { CustomerComponent } from './pages/customer/customer.component';
import { AboutComponent } from './pages/about/about.component';
import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: environment.CLIENTS_PATHS.ABOUT,
    component: AboutComponent,
  },
  {
    path: environment.CLIENTS_PATHS.CUSTOMER,
    component: CustomerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class HomeRoutingModule { }
