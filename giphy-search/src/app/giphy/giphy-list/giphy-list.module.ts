import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyListComponent } from './giphy-list.component';

@NgModule({
  imports: [ CommonModule, FormsModule],
  exports: [GiphyListComponent],
  declarations: [GiphyListComponent],
  providers: []
})
export class GiphyListModule { }
