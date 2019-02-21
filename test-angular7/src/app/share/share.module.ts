import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DragDropModule,
    ScrollingModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DragDropModule,
    ScrollingModule,
  ],
  providers: []
})
export class ShareModule { }
