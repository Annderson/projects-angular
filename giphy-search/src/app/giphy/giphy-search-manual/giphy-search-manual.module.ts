import { NgModule } from '@angular/core';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiphyListModule } from '../giphy-list/giphy-list.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      GiphyListModule
    ],
    exports: [GiphySearchManualComponent],
    declarations: [GiphySearchManualComponent],
    providers: [GiphySearchService],
})
export class GiphySearchManualModule {

 }
