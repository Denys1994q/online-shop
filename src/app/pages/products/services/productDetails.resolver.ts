import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn, Router} from '@angular/router';
import {Observable, catchError, of} from 'rxjs';
import {ProductsService} from '../../../services/products.service';
import {ProductInterface} from '../../../shared/models/product.interface';

export const ProductDetailsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
): Observable<ProductInterface> | null | '' => {
  const productId = route.paramMap.get('id');
  const productsService = inject(ProductsService);
  const router = inject(Router);
  return (
    productId &&
    productsService.getProductById(productId).pipe(
      catchError(() => {
        router.navigate(['/products']);
        return of({} as ProductInterface);
      })
    )
  );
};
