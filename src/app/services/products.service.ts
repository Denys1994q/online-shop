import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { products } from '../pages/products/constants/products.constant';
import {ProductInterface} from '../shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Observable<ProductInterface[]> {
    return of(products).pipe(delay(1000));
  }
}
