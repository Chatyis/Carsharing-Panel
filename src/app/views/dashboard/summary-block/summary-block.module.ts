import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryBlockComponent } from './summary-block.component';

@NgModule({
  declarations: [
    SummaryBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SummaryBlockComponent
  ]
})
export class SummaryBlockModule { }
