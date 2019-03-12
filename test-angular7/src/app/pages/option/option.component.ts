import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  constructor(private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  sorry() {
    this.toastr.info('Essa opção não foi implementada', 'Desculpe');
  }

}
