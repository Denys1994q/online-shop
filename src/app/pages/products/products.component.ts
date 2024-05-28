import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  products!: ProductInterface[];
  loading: boolean = true;
  unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (products: ProductInterface[]) => {
          this.products = products;
          this.loading = false;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
