import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiError } from '@burand/angular';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (!request.url.startsWith(environment.urlApi)) {
          throw err;
        }

        if (err instanceof HttpErrorResponse && err.error.code && err.error.message) {
          throw new ApiError(err.error.code, err.status);
        }

        throw err;
      })
    );
  }
}
