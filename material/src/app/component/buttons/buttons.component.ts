import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() backColor: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
