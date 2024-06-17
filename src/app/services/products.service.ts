import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {ProductInterface} from '../shared/models/product.interface';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private getAllProductsUrl = 'product';
  private getOneProductUrl = (id: string) => `${enviroment.baseUrl}/${this.getAllProductsUrl}/${id}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${enviroment.baseUrl}/${this.getAllProductsUrl}`).pipe(
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
