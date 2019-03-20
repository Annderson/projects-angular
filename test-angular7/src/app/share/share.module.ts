import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Functions6mComponent } from './../componente/functions6m/functions6m.component';
import { SideBarComponent } from './../componente/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    SideBarComponent,
    Functions6mComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    SideBarComponent,
    Functions6mComponent
  ],
  providers: []
})
export class ShareModule { }
