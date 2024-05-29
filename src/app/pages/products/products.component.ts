import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  products!: ProductInterface[];
  loading: boolean = false;

  ngOnInit(): void {
    this.subscribeToProducts();
  }

  subscribeToProducts(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (products: ProductInterface[]) => {
        this.products = products;
        this.loading = false;
      }
    });
  }
}
