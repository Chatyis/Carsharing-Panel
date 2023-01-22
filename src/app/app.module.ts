import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelModule } from './side-panel/side-panel.module';
import { RentCarModule } from './views/rent-car/rent-car.module';
import { CarshareModule } from './views/carshare/carshare.module';
import { OrdersModule } from './views/orders/orders.module';
import { ReturnCarModule } from './views/return-car/return-car.module';
import { RestApiModule } from './rest-api/rest-api.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidePanelModule,
    RentCarModule,
    CarshareModule,
    OrdersModule,
    ReturnCarModule,
    RestApiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
