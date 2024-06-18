import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpContextToken
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastService} from '../services/toast.service';

export const WITH_TOAST = new HttpContextToken<boolean>(() => true);

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(WITH_TOAST)) {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          this.toastService.showError(error.error.message);
          throw error;
        })
      );
    }

    return next.handle(request);
  }
}
