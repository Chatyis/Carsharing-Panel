import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveCarComponent } from './remove-car.component';



@NgModule({
  declarations: [
    RemoveCarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RemoveCarComponent
  ]
})
export class RemoveCarModule { }
