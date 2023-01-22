import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { SummaryBlockModule } from './summary-block/summary-block.module';
import { RestApiModule } from 'src/app/rest-api/rest-api.module';

@NgModule({
  declarations: [ 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SummaryBlockModule,
    RestApiModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
