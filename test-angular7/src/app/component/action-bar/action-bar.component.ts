import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  public colorBar = '';

  constructor() {
    this.colorBar = window.location.href.indexOf('customer') > 0 ?
                    'color-action' : window.location.href.indexOf('about') > 0 ? 'color-action' : '';
  }

  ngOnInit() {
  }

  coolorNav(cor: string){
    this.colorBar = cor;
  }

}
