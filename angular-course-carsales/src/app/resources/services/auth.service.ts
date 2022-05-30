import { ResponseLogin } from './../model/ResponseLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse?: ResponseLogin;


  public clear(): void{
    this.loginResponse = undefined;

  }
//GUARDA O RESPONSE LOGIN E VALIDA SE É UNDERFINED OU NÃO

  public isAutenticated(): boolean{
    return Boolean (this.loginResponse?.jwt)
  }
}
