
import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';
import { Http, Response } from '@angular/http';
import { templateJitUrl } from '@angular/compiler';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'giphy-search-manual',
    templateUrl: './giphy-search-manual.component.html',
    styleUrls: ['./giphy-search-manual.component.css']
})

export class GiphySearchManualComponent implements OnInit {
    constructor(private giphySearchService: GiphySearchService) { }

    private limit: string;
    private term: string;
    private gifs: any[] = [];

    ngOnInit() { }

    pesquisarGiphy() {
        this.giphySearchService.pesquisarGiphy(this.limit, this.term)
        .subscribe((response: Response) => {
            console.log(response.json());
            this.gifs = response.json().data;
        });
    }
}
