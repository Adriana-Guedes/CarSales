import { AuthService } from './auth.service';
import { ResponseLogin } from './../model/ResponseLogin';
import { RequestLogin } from './../model/RequestLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient, private authService: AuthService) { }



  //METODO PARA REALIZAR AUTENTICAÇÃO DO LOGIN NO SERVIDOR
  public dologin(RequestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpclient.post<ResponseLogin>(
      'http://localhost:8080/api/login', RequestLogin
      ).pipe(tap((loginResponse)=> (this.authService.loginResponse = loginResponse ))) ;


  }
}
