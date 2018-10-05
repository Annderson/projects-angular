import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';



@Injectable()
export class ListService {
  constructor(private http: Http) { }

  searchGiphy(limit: string, tema: string): Observable<Response> {
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + tema + '&api_key=dc6zaTOxFJmzC&limit=' + limit;
    return this.http.get(url);
  }
}
