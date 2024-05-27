import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input({required: true}) product!: ProductInterface;
  priceWithDiscount!: number;

  ngOnInit() {
    this.priceWithDiscount = this.product.discount
      ? this.product.price - (this.product.price * this.product.discount) / 100
      : this.product.price;
  }
}
