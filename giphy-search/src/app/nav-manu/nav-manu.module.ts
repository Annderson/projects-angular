
import { NavManuComponent } from './nav-manu.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavManuRoutingModule } from './nav-manu-routing.module';

@NgModule({
  imports: [CommonModule,NavManuRoutingModule],
  exports: [NavManuComponent],
  declarations: [NavManuComponent],
  providers: [],
})
export class NavManuModule { }
