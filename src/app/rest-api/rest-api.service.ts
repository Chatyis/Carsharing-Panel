import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  restApiGet(path:string, options?:Object): Observable<Object> {
    return this.http.get(environment.apiUrl + '/' + path , options)
  }
  
  restApiPost(path:string, options:Object): Observable<Object> {
    return this.http.post(environment.apiUrl + '/' + path , options)
  }

  restApiUpdate(path:string, options:Object): Observable<Object> {
    return this.http.put(environment.apiUrl + '/' + path , options)
  }

  restApiDelete(path:string, options:Object): Observable<Object> {
    return this.http.delete(environment.apiUrl + '/' + path , options)
  }
}
