import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInRequestService } from './logged-in-request.service';
import { RestApiService } from './rest-api.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';
import { LoggedInUserService } from './logged-in-user.service';
import { DashboardService } from './dashboard.service';

@NgModule({
  providers:[LoggedInRequestService,RestApiService, CookieService, LoginService,LoggedInUserService, DashboardService],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class RestApiModule { }
