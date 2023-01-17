import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnCarComponent } from './return-car.component';

@NgModule({
  declarations: [
    ReturnCarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReturnCarComponent
  ]
})
export class ReturnCarModule { }
