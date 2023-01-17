import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareCarComponent } from './share-car.component';

@NgModule({
  declarations: [
    ShareCarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShareCarComponent
  ]
})
export class ShareCarModule { }
