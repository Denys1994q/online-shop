import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductsService} from '../../../services/products.service';
import {ProductInterface} from '../../../shared/models/product.interface';

export const ProductDetailsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
): Observable<ProductInterface> | null | '' => {
  const productId = route.paramMap.get('id');
  const productsService = inject(ProductsService);
  return productId && productsService.getProductById(productId);
};
