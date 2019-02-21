import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    DragDropModule,
    ScrollingModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    DragDropModule,
    ScrollingModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class ShareModule { }
