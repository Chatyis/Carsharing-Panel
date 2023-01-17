import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './views/orders/orders.component';
import { RentCarComponent } from './views/rent-car/rent-car.component';
import { ReturnCarComponent } from './views/return-car/return-car.component';

const routes: Routes = [
  {path: 'rent-car', component:RentCarComponent},
  {path: 'carshare', loadChildren:() => import('./views/carshare/carshare.module').then(m=>m.CarshareModule)},
  {path: 'orders', component:OrdersComponent},
  {path: 'return-car', component:ReturnCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
