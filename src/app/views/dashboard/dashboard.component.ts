import { Component, OnInit } from '@angular/core';
import { LoggedInRequestService } from 'src/app/rest-api/logged-in-request.service';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  
  constructor(private loggedInService: LoggedInRequestService) { }
  
  ngOnInit(): void {
    // this.loggedInService.restApiPost('login',{username:'abc',password:'abcd'}).subscribe(res=>{
    //   console.log(res);
    // });
    this.loggedInService.restApiPost('get-logins/',{username:"test",password:"aas"}).subscribe(res=>{
      console.log(res);
    });
  }
}
