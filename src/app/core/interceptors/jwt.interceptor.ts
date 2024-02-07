import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SessionContext } from '../contexts/session.context';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private useSession: SessionContext) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.startsWith(environment.urlApi)) {
      return next.handle(request);
    }

    return from(this.useSession.getBearerToken().catch(() => null)).pipe(
      switchMap(token => {
        if (token) {
          const requestClone = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });

          return next.handle(requestClone);
        }

        return next.handle(request);
      })
    );
  }
}
