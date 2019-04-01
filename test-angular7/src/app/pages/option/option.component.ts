import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { UserService } from 'src/app/service/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  public emailLogin: string;
  public senhaLogin: string;
  public modal = '';

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit() { }

  sorry() {
    this.toastr.info('Essa opção não foi implementada', 'Desculpe');
  }

  logar() {
    if (_.isNull(this.emailLogin) || _.isUndefined(this.emailLogin) || _.isEmpty(this.emailLogin) ||
        _.isNull(this.senhaLogin) || _.isUndefined(this.senhaLogin) || _.isEmpty(this.senhaLogin)) {
      this.toastr.error('Digite seu e-mail e senha!', 'Erro!');
    } else {
      this.userService.logar(this.emailLogin, this.senhaLogin).subscribe(user => {
        console.log(user);
        this.router.navigate([`${environment.CLIENTS_PATHS.LANCHES}`]);
        console.log(window.document.getElementById('exampleModalCenter').getAttribute('aria-hidden'));
      });

    }
  }

}
