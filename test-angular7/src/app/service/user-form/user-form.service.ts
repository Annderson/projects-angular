import { User } from './../../models/user.class';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  public user: User;
  public formUser: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  init() {
    this.user = new User();
    this.formUser = this.formBuilder.group({
      nome: [this.user.nome, [Validators.required]],
      cpf: [this.user.cpf, [Validators.required]],
      dataNasc: [this.user.dataNasc, [Validators.required]],
      cep: [this.user.cep, [Validators.required]],
      numero: [this.user.numero, [
        Validators.required,
        Validators.min(1)
      ]],
      endereco: [this.user.numero, [Validators.required]],
      cidade: [this.user.cidade, [Validators.required]],
      estado: [this.user.estado, [Validators.required]],
      email: [this.user.email, [Validators.required]],
      senha: [this.user.senha, [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
    return this.formUser;
  }
}
