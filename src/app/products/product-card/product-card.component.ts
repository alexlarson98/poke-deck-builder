import { Component, Input } from '@angular/core';
import { ProductCard } from '../products.component';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productCard!: ProductCard;
}


