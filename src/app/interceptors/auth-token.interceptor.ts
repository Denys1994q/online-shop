import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpContextToken
} from '@angular/common/http';
import {Observable} from 'rxjs';

export const WITH_AUTH_TOKEN = new HttpContextToken<boolean>(() => true);

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.context.get(WITH_AUTH_TOKEN)) {
      const token = localStorage.getItem('authToken');
      const modifiedRequest = request.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
