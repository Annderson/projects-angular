import { ButtonsComponent } from './../component/buttons/buttons.component';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
  ],
  exports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    ButtonsComponent
  ],
})
export class ShareModule { }
