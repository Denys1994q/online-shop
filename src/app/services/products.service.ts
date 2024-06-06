import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {products} from '../pages/products/constants/products.constant';
import {ProductInterface} from '../shared/models/product.interface';
import {HttpClient} from '@angular/common/http';
import {baseUrl, getOneProductUrl} from '../api/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return of(products).pipe(delay(1000));
  }

  getProductById(productId: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${getOneProductUrl(productId)}`);
  }
}
