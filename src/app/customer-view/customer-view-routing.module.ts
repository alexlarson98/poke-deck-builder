import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerViewHomeComponent } from './customer-view-home/customer-view-home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

const appRoutes: Routes = [
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'home', component: CustomerViewHomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerViewRoutingModule {}