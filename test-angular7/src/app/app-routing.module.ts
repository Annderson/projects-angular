import { CadUserComponent } from './pages/cad-user/cad-user.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { environment } from './../environments/environment';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OptionComponent } from './pages/option/option.component';
import { LanchesComponent } from './pages/lanches/lanches.component';

const routes: Routes = [
  {
    path: '',
    component: OptionComponent
  },
  {
    path: environment.CLIENTS_PATHS.CADLANCHE,
    component: CadUserComponent,
  },
  {
    path: environment.CLIENTS_PATHS.LANCHES,
    component: LanchesComponent,
  },
  {
    path: environment.CLIENTS_PATHS.HOME,
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
