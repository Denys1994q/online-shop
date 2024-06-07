import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductInterface} from '../../../shared/models/product.interface';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: []
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product!: ProductInterface;
  priceWithDiscount!: number;
  unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.subscribeToProductData();
    this.getProductPrice();
  }

  subscribeToProductData(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      this.product = data['product'];
    });
  }

  getProductPrice(): void {
    this.priceWithDiscount = this.product.discount
      ? this.product.price - (this.product.price * this.product.discount) / 100
      : this.product.price;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
