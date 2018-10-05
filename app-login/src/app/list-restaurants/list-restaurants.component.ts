import { Response } from '@angular/http';
import { ListService } from './../service/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  gifs: any[] = [];
  limit: string;
  termo: string;

  constructor(private list: ListService) { }

  ngOnInit() {
  }

  buscar() {
     this.list.searchGiphy(this.limit, this.termo).subscribe((res: Response) => {
       this.gifs = res.json().data;
       console.log(res);
     });
  }

}
