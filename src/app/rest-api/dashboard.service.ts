import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getDashboardData(): Observable<Dashboard>{
    // To be swapped with API request using token etc userData.value
    return of({
      monthsExp: 1253.43,
      rented: 4,
      shared: 5,
      monthsInc: 3425.15
    });
  }
}
