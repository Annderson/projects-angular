import { NgModule } from '@angular/core';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { MessangerService } from '../../messanger/messanger.service';

@NgModule({
    imports: [],
    exports: [GiphySearchManualComponent],
    declarations: [GiphySearchManualComponent],
    providers: [GiphySearchService],
})
export class GiphySearchManualModule {

 }
