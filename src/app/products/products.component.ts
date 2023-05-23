import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productCard1: ProductCard = {
    title: 'Carbon Offsetting Marketplace',
    info: 'Acquire carbon emission reduction (CERs) credits seamlessly through our dedicated carbon offsetting marketplace. Opt for manual purchases or establish recurring transactions to align with your monthly emissions, ensuring a consistent commitment to sustainability.',
    image: 'dummy-saas-1.png'
  }
  productCard2: ProductCard = {
    title: 'Visualize your Impact',
    info: 'Acquire carbon emission reduction (CERs) credits seamlessly through our dedicated carbon offsetting marketplace. Opt for manual purchases or establish recurring transactions to align with your monthly emissions, ensuring a consistent commitment to sustainability.',
    image: 'dummy-saas-2.png'
  }
  productCard3: ProductCard = {
    title: 'Emissions Calculator',
    info: 'Acquire carbon emission reduction (CERs) credits seamlessly through our dedicated carbon offsetting marketplace. Opt for manual purchases or establish recurring transactions to align with your monthly emissions, ensuring a consistent commitment to sustainability.',
    image: 'dummy-saas-3.png'
  }
  productCard4: ProductCard = {
    title: 'Sustainability Education',
    info: 'Acquire carbon emission reduction (CERs) credits seamlessly through our dedicated carbon offsetting marketplace. Opt for manual purchases or establish recurring transactions to align with your monthly emissions, ensuring a consistent commitment to sustainability.',
    image: 'dummy-saas-1.png'
  }
  productCard5: ProductCard = {
    title: 'Marketing your Impact',
    info: 'Acquire carbon emission reduction (CERs) credits seamlessly through our dedicated carbon offsetting marketplace. Opt for manual purchases or establish recurring transactions to align with your monthly emissions, ensuring a consistent commitment to sustainability.',
    image: 'dummy-saas-2.png'
  }
}

export interface ProductCard {
  title: string,
  info: string,
  image: string
}
