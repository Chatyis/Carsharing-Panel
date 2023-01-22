import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarshareComponent } from './carshare.component';
import { HistoryComponent } from './history/history.component';
import { RemoveCarComponent } from './remove-car/remove-car.component';
import { ShareCarComponent } from './share-car/share-car.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/carshare/share-car",
    pathMatch: 'full'
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'remove-car',
    component: RemoveCarComponent
  },
  {
    path: 'share-car',
    component: ShareCarComponent
  }
];

@NgModule({
  declarations: [
    CarshareComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    CarshareComponent,
    RouterModule
  ]
})
export class CarshareModule { }
