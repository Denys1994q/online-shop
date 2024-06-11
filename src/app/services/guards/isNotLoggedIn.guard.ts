import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {catchError, map, of} from 'rxjs';
import {RoutingConstants} from '../../shared/constants/rouring.constant';

export const isNotLoggedIn: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getUser().pipe(
    map(() => {
      router.navigate([`/${RoutingConstants.PRODUCTS}`]);
      return false;
    }),
    catchError(() => of(true))
  );
};
