import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { SummaryBlockModule } from './summary-block/summary-block.module';
import { RestApiModule } from 'src/app/rest-api/rest-api.module';
import { EditableInputComponent } from './editable-input/editable-input.component';

@NgModule({
  declarations: [ 
    DashboardComponent, EditableInputComponent
  ],
  imports: [
    CommonModule,
    SummaryBlockModule,
    RestApiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
