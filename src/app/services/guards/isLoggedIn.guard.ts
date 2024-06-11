import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {catchError, map, of} from 'rxjs';
import {RoutingConstants} from '../../shared/constants/rouring.constant';

export const isLoggedIn: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getUser().pipe(
    map(() => true),
    catchError(() => {
      router.navigate([`/${RoutingConstants.SIGN_IN}`]);
      return of(false);
    })
  );
};
