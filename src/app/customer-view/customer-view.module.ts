import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewRoutingModule } from './customer-view-routing.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CustomerViewHomeComponent } from './customer-view-home/customer-view-home.component';
import { ScreenSizeService } from './services/screen-size.service';
import { QuarterDataComponent } from './customer-view-home/quarter-data/quarter-data.component';
import { EmissionsViewComponent } from './customer-view-home/emissions-view/emissions-view.component';



@NgModule({
  declarations: [
    MarketplaceComponent,
    SideMenuComponent,
    CustomerViewHomeComponent,
    QuarterDataComponent,
    EmissionsViewComponent
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
