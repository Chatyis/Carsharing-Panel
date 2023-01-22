import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidePanelButtonComponent } from './side-panel-button.component';

@NgModule({
  declarations: [
    SidePanelButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidePanelButtonComponent
  ]
})
export class SidePanelButtonModule { }
