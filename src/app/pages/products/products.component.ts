import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';
import {productsFilters} from './constants/products-filters.constant';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  products!: ProductInterface[];
  productsFilters = productsFilters;

  constructor(private productsService: ProductsService, public loader: LoaderService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((products: ProductInterface[]) => {
      this.products = products;
    });
  }

  onFormChange(values: any): void {
    console.log('Form values changed:', values);
  }
}
