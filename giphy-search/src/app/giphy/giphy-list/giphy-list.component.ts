import { Giphy } from './../giphy-search-manual/giphy.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {

  @Input()
  gifsList: Giphy[] = [];

  constructor() { }

  ngOnInit() {
  }

}
