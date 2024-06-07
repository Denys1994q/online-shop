import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {ProductInterface} from '../shared/models/product.interface';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private getAllProductsUrl = 'product';
  private getOneProductUrl = (id: string) => `${baseUrl}/${this.getAllProductsUrl}/${id}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${baseUrl}/${this.getAllProductsUrl}`).pipe(
      map((products: any) => {
        return products.map((product: ProductInterface) => {
          product.brand = 'Samsung';
          product.state = 'New';
          product.seller = 'Rozetka';
          return product;
        });
      })
    );
  }

  getProductById(productId: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.getOneProductUrl(productId)}`);
  }
}
