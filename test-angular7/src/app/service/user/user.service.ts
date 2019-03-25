import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:max-line-length
  public rEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public rNome = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/;
  public rCep = /^[0-9]{5}-[0-9]{3}$/;


  constructor(private http: HttpClient) {
  }

  validarCep(cep: string): boolean {
    return this.rCep.test(cep);
  }

  validarNome(nome: string): boolean {
    return this.rNome.test(nome);
  }

  validarEmail(email: string): boolean {
    return this.rEmail.test(email);
  }

  getEndereco(cep: string): Observable<any> {
    return this.http.get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`);
  }
}
