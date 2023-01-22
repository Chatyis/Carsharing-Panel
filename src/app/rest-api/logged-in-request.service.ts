import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs';

import { RestApiService } from './rest-api.service';


interface LooseObject {
  [key: string]: any
}

@Injectable({
  providedIn: 'root'
})

export class LoggedInRequestService {
  constructor( private restApiService:RestApiService,
    private cookie:CookieService){}

  private getOptionsWithToken(options?:Object): Object{
    let optionsWithToken: LooseObject = {};
    if(options) {
      optionsWithToken = options;
    }       
    optionsWithToken['jwtToken'] = this.cookie.get('jwtToken');
    return optionsWithToken;
  }

  restApiGet(path:string, options?:Object): Observable<Object> {
    return this.restApiService.restApiGet(path, this.getOptionsWithToken(options));
  }
  
  restApiPost(path:string, options?:Object): Observable<Object> {
    return this.restApiService.restApiPost(path, this.getOptionsWithToken(options));
  }

  restApiUpdate(path:string, options?:Object): Observable<Object> {
    return this.restApiService.restApiUpdate(path, this.getOptionsWithToken(options));
  }

  restApiDelete(path:string, options?:Object): Observable<Object> {
    return this.restApiService.restApiDelete(path, this.getOptionsWithToken(options));
  }
}
