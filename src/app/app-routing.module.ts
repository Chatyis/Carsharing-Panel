import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { OrdersComponent } from './views/orders/orders.component';
import { OrdersModule } from './views/orders/orders.module';
import { RentCarComponent } from './views/rent-car/rent-car.component';
import { RentCarModule } from './views/rent-car/rent-car.module';
import { ReturnCarComponent } from './views/return-car/return-car.component';
import { ReturnCarModule } from './views/return-car/return-car.module';

const routes: Routes = [
  {
    path: '', 
    redirectTo: "/dashboard",
    pathMatch: 'full'
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'rent-car', 
    component: RentCarComponent
  },
  {
    path: 'carshare', 
    loadChildren:() => import('./views/carshare/carshare.module').then(m=>m.CarshareModule)
  },
  {
    path: 'orders', 
    component: OrdersComponent
  },
  {
    path: 'return-car', 
    component: ReturnCarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RentCarModule, OrdersModule, ReturnCarModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
