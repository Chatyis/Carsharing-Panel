import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidePanelComponent } from './side-panel.component';
import { SidePanelButtonModule } from './side-panel-button/side-panel-button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidePanelComponent,
  ],
  imports: [
    CommonModule,
    SidePanelButtonModule,
    RouterModule
  ],
  exports:[
    SidePanelComponent,
  ]
})
export class SidePanelModule { }
