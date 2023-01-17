import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelButtonComponent } from './side-panel-button.component';
import { RouterModule } from '@angular/router';



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
