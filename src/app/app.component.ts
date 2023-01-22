import { Component } from '@angular/core';
import { LoginService } from './rest-api/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'carsharing';

  constructor(private loginService: LoginService){}

  login(){
    this.loginService.login('asd','abcd');
  }
}
