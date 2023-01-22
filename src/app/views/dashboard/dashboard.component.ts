import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Dashboard } from 'src/app/rest-api/dashboard.model';
import { DashboardService } from 'src/app/rest-api/dashboard.service';
import { LoggedInUserService } from 'src/app/rest-api/logged-in-user.service';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  isDisabled: boolean = true;
  sub: Subscription = new Subscription();
  dashboard: Dashboard;
  userDataForm = this.fb.group({
    country: [{value: '', disabled: this.isDisabled}, Validators.required],
    city: [{value: '', disabled: this.isDisabled}, Validators.required],
    address: [{value: '', disabled: this.isDisabled}, Validators.required],
    postalCode: [{value: '', disabled: this.isDisabled}, Validators.required],
    email: [{value: '', disabled: this.isDisabled}, Validators.required],
    phoneNumber: [{value: '', disabled: this.isDisabled}, Validators.required],
    firstName: [{value: '', disabled: this.isDisabled}, Validators.required],
    lastName: [{value: '', disabled: this.isDisabled}, Validators.required],
  })

  constructor( private fb: FormBuilder, 
    private loggedInUserService: LoggedInUserService, 
    private dashboardService: DashboardService) { }
  
  ngOnInit(): void {
    this.fetchUserData();
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleDisabledInputs(): void {
    this.fetchUserData();
    this.isDisabled ? this.userDataForm.enable() : this.userDataForm.disable();
    this.isDisabled = this.userDataForm.disabled;
  }

  fetchUserData(): void{
    this.sub.add(this.loggedInUserService.getUserData().subscribe(user=>{
      this.userDataForm.patchValue(user);
    }))
    this.sub.add(this.dashboardService.getDashboardData().subscribe(dashboard => {
      this.dashboard = dashboard;
    }))
  }

  save(): void{
    if (this.userDataForm.valid){
      this.loggedInUserService.setUserData(this.userDataForm).subscribe(res=>{
        if (res.ok){
          this.isDisabled = true;
          this.userDataForm.enable();
        }
      })
    }
  }
}
