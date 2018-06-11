import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavManuComponent } from './nav-manu.component';

const routes: Routes = [
  { path: '', component: NavManuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavManuRoutingModule { }

