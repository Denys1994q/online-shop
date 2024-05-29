import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';
import {user} from '../../user';
import {UserInterface, PermissionEnum} from '../../user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  PermissionEnum = PermissionEnum;
  constructor(private productsService: ProductsService) {}
  products!: ProductInterface[];
  loading: boolean = false;
  user: UserInterface = user;
  currentData = new Date();

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
