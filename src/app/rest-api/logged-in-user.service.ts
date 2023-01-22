import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UserData } from './user-data.model';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {
  getUserData(): Observable<UserData>{
    // To be swapped with API request using token etc
    return of( {country: 'Polando',
    city: 'Zalando',
    address: 'Streetando',
    postalCode: '12-345',
    email: 'robert@kubica.com',
    phoneNumber: '+48 694 201 324',
    firstName: 'Robert',
    lastName: 'Kubica'})
  }

  setUserData(userData: FormGroup): Observable<HttpResponse<any>>{
    // To be swapped with API request using token etc userData.value
    return of(new HttpResponse<any>({status:200}));
  }
}
