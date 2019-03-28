export class User {
  constructor(
    public id?: string,
    public nome?: string,
    public cpf?: string,
    public dataNasc?: string,
    public cep?: string,
    public numero?: number,
    public endereco?: string,
    public cidade?: string,
    public estado?: string,
    public email?: string,
    public senha?: string,
  ) {}
}
