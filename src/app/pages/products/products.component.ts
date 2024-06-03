import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';
import {productsFilters} from './products-filters.constant';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  products!: ProductInterface[];
  loading: boolean = false;
  productsFilters = productsFilters;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (products: ProductInterface[]) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      }
    });
  }

  onFormChange(values: any): void {
    console.log('Form values changed:', values);
  }
}
