
import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';
import { Http, Response } from '@angular/http';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'giphy-search-manual',
    templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {
    constructor(private giphySearchService: GiphySearchService) { }

    limit: string;
    term: string;
    gifs: any[] = [];

    ngOnInit() { }

    pesquisarGiphy() {
        this.giphySearchService.pesquisarGiphy(this.limit, this.term)
        .subscribe((response: Response) => {
            console.log(response.json());
            this.gifs = response.json().data;
        });
    }
}
