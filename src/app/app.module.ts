import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeBannerComponent } from './home/welcome-banner/welcome-banner.component';
import { AvailableSolutionsComponent } from './home/available-solutions/available-solutions.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { SolutionBannerComponent } from './home/solution-banner/solution-banner.component';
import { CustomerViewModule } from './customer-view/customer-view.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeBannerComponent,
    AvailableSolutionsComponent,
    ProductsComponent,
    ProductCardComponent,
    SolutionBannerComponent
  ],
  imports: [
    BrowserModule,
    CustomerViewModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
