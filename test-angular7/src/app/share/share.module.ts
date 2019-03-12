import { Functions6mComponent } from './../componente/functions6m/functions6m.component';
import { SideBarComponent } from './../componente/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SideBarComponent,
    Functions6mComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SideBarComponent,
    Functions6mComponent
  ],
  providers: []
})
export class ShareModule { }
