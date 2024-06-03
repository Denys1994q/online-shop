import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '../shared/models/product.interface';
import {HttpClient} from '@angular/common/http';
import {baseUrl, getAllProductsUrl} from '../api/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/${getAllProductsUrl}`);
  }
}
