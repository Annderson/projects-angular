import { User } from './../../models/user.class';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { LanchesService } from '../../service/lanche/lanches.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { UserFormService } from 'src/app/service/user-form/user-form.service';


@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.component.html',
  styleUrls: ['./cad-user.component.scss']
})
export class CadUserComponent implements OnInit {

  public formUser: FormGroup;
  public conculCEP: string;
  public mail = 'anderson@gmail.com';
  public senha = '123456';
  public user: any;

  constructor(
    private userForm: UserFormService,
    private lanchesService: LanchesService,
    private userService: UserService,
    private toastr: ToastrService,
  ) {
    this.formUser = <FormGroup>this.userForm.init();
    this.userService.validarCep('');
  }

  ngOnInit() { }

  cadastrar() {
    console.log(this.formUser.value);
    const user: any = {
      nome: this.formUser.get('nome').value,
      cpf: this.formUser.get('cpf').value,
      dataNasc: this.formUser.get('dataNasc').value,
      cep: this.formUser.get('cep').value,
      numero: this.formUser.get('numero').value,
      endereco: this.formUser.get('endereco').value,
      cidade: this.formUser.get('cidade').value,
      estado: this.formUser.get('estado').value,
      email: this.formUser.get('email').value,
      senha: this.formUser.get('senha').value,
    };

    this.userService.registerUser(user).subscribe(dat => {
      console.log(dat)
    });

    // if (_.isNull(this.mail) || _.isUndefined(this.mail) || _.isEmpty(this.mail) ||
    //     _.isNull(this.senha) || _.isUndefined(this.senha) || _.isEmpty(this.senha)) {
    //   this.toastr.error('Não foi escolhido nenhum lanche!', 'Erro ao confirmar!');
    // } else {
    //   this.lanchesService.logar(this.mail, this.senha).subscribe(us => {
    //     this.user = us;
    //     console.log(this.user);
    //     this.toastr.success('login validado com sucesso!', 'Sucesso');
    //   });
    // }
  }

  consultarCep() {
    if (!this.userService.validarCep(this.formUser.get('cep').value)) {
      this.toastr.error('Digite um CEP valido', 'Erro');
    } else {
      this.userService.getEndereco(this.formUser.get('cep').value).subscribe(end => {
        end.status === 0 ? this.toastr.error('CEP não encontrado', 'Erro') :
                           this.formUser.get('endereco').setValue(end.address),
                           this.formUser.get('cidade').setValue(end.city),
                           this.formUser.get('estado').setValue(end.state)
      });
    }
  }

  validarNome() {
    this.userService.validarNome(this.formUser.get('nome').value) ?
     '' : this.toastr.error('Digite um nome valido', 'Erro');
  }

  validarEmail() {
    this.userService.validarEmail(this.formUser.get('email').value) ?
     '' : this.toastr.error('Digite um e-mail valido', 'Erro');
  }

}
