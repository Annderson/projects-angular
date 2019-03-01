import { ActionBarComponent } from './../component/action-bar/action-bar.component';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ActionBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DragDropModule,
    ScrollingModule,
  ],
  exports: [
    ActionBarComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    DragDropModule,
    ScrollingModule,
  ],
  providers: []
})
export class ShareModule { }
