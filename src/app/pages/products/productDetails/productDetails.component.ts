import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductInterface} from '../../../shared/models/product.interface';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: []
})
export class ProductDetailsComponent {
  product!: ProductInterface;
  priceWithDiscount!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.route.data.subscribe((data) => {
      this.product = data['product'];
    });
    this.priceWithDiscount = this.product.discount
      ? this.product.price - (this.product.price * this.product.discount) / 100
      : this.product.price;
  }
}
