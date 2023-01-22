import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restApiService: RestApiService) { }

  login( login: string, password: string ){
    this.restApiService.restApiPost('login',{username:login,password:password}).subscribe(res=>{
      console.log(res);
    });
  }
}
