
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { MessangerService } from '../messanger/messanger.service';
import { MessangerComponent } from '../messanger/messanger.component';

@Injectable()
export class GiphySearchService {

    constructor(private teste: MessangerComponent) { }

    pesquisarGiphy(): void {
      console.log('teste');
      this.teste.reset();
    }

    /*
    pesquisarGiphy(limit: string, term: string): Observable<Response> {
        const url = 'http://apigiphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC&limit=' + limit;
        return this.http.get(url);
    }
    */
}
