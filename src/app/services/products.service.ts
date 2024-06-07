import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {ProductInterface} from '../shared/models/product.interface';
import {HttpClient} from '@angular/common/http';
import {baseUrl, getAllProductsUrl} from '../api/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${baseUrl}/${getAllProductsUrl}`).pipe(
      map((products) => {
        return products.map((product: any) => {
          product.brand = 'Samsung';
          product.state = 'New';
          product.seller = 'Rozetka';
          return product;
        });
      })
    );
  }
}
