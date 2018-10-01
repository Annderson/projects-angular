import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  private list: ListService;

  constructor() { }

  ngOnInit() {
  }

}
