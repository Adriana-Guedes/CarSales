import { AlertService } from './../../resources/services/alert.service';
import { LoginService } from './../../resources/services/login.service';
import { RequestLogin } from './../../resources/model/RequestLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin |any;

  //ASSIM QUE O ANGULAR TERMINAR A CONSTRUÇÃO DO COMPONENTE ELE INVOCA ESSE METODO NO NGONINT UMA VEZ( GERANDO A INSTANCIA DO REQUESTLOGIN)
  constructor(private loginService: LoginService,
              private alertService : AlertService,
              private router: Router) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }


  public doLogin(): void {
   this.loginService.dologin(this.requestLogin).subscribe(data => {
     this.router.navigate(['dashboard']);
   },
      (httpError)=>{
        this.alertService.error(httpError.error.message);


   } );

  }

}
