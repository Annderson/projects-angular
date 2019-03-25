import { UserService } from './../../service/user/user.service';
import { LanchesService } from './../../service/lanche/lanches.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';


@Component({
  selector: 'app-cad-lanche',
  templateUrl: './cad-lanche.component.html',
  styleUrls: ['./cad-lanche.component.scss']
})
export class CadLancheComponent implements OnInit {

  public nome: string;
  public conculCEP: string;
  public endereco: string;
  public cidade: string;
  public estado: string;
  public email: string;
  public mail = 'anderson@gmail.com';
  public senha = '123456';
  public user: any;

  constructor(
    private lanchesService: LanchesService,
    private userService: UserService,
    private toastr: ToastrService,
  ) {
    this.userService.validarCep('');
  }

  ngOnInit() {
  }

  logar() {
    if (_.isNull(this.mail) || _.isUndefined(this.mail) || _.isEmpty(this.mail) ||
        _.isNull(this.senha) || _.isUndefined(this.senha) || _.isEmpty(this.senha)) {
      this.toastr.error('Não foi escolhido nenhum lanche!', 'Erro ao confirmar!');
    } else {
      this.lanchesService.logar(this.mail, this.senha).subscribe(us => {
        this.user = us;
        console.log(this.user);
        this.toastr.success('login validado com sucesso!', 'Sucesso');
      });
    }
  }

  consultarCep() {
    if (!this.userService.validarCep(this.conculCEP)) {
      this.toastr.error('Digite um CEP valido', 'Erro');
    } else {
      this.userService.getEndereco(this.conculCEP).subscribe(end => {
        end.status === 0 ? this.toastr.error('CEP não encontrado', 'Erro') :
                           this.endereco = end.address,
                           this.cidade = end.city,
                           this.estado = end.state;
      });
    }
  }

  validarNome() {
    this.userService.validarNome(this.nome) ?
     '' : this.toastr.error('Digite um nome valido', 'Erro');
  }

  validarEmail() {
    this.userService.validarEmail(this.email) ?
     '' : this.toastr.error('Digite um e-mail valido', 'Erro');
  }

}
