import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewRoutingModule } from './customer-view-routing.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SideMenuComponent } from './side-menu/side-menu.component';



@NgModule({
  declarations: [
    MarketplaceComponent,
    SideMenuComponent
  ],
  exports: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    CustomerViewRoutingModule
  ]
})
export class CustomerViewModule { }
