import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewRoutingModule } from './customer-view-routing.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CustomerViewHomeComponent } from './customer-view-home/customer-view-home.component';
import { ScreenSizeService } from './services/screen-size.service';



@NgModule({
  declarations: [
    MarketplaceComponent,
    SideMenuComponent,
    CustomerViewHomeComponent
  ],
  exports: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    CustomerViewRoutingModule
  ],
  providers:
  [
    ScreenSizeService
  ]
})
export class CustomerViewModule { }
