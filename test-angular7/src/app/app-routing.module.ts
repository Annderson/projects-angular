import { HomeModule } from './home/home.module';
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule'  },
  { path: '**', redirectTo: '' }
  // { path: 'scroll', component: VirtualScrollComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
