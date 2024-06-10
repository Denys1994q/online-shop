import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {catchError, map, of} from 'rxjs';
import {RoutingConstants} from '../../shared/constants/rouring.constant';

export const canActivate: CanActivateFn = (_, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (state.url === `/${RoutingConstants.SIGN_IN}` || state.url === `/${RoutingConstants.SIGN_UP}`) {
    return authService.getUser().pipe(
      map(() => {
        router.navigate([`/${RoutingConstants.PRODUCTS}`]);
        return false;
      }),
      catchError(() => {
        return of(true);
      })
    );
  } else {
    return authService.getUser().pipe(
      map(() => {
        if (state.url === '/') {
          router.navigate([`/${RoutingConstants.PRODUCTS}`]);
        }
        return true 
      }),
      catchError(() => {
        router.navigate([`/${RoutingConstants.SIGN_IN}`]);
        return of(false);
      })
    );
  }
};
