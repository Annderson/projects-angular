import { NgModule } from '@angular/core';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [GiphySearchManualComponent],
    declarations: [GiphySearchManualComponent],
    providers: [GiphySearchService],
})
export class GiphySearchManualModule { }
