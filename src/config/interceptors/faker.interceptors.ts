import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';

@Injectable()
export class FakerInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const TEST_USER = {id: 1, username: 'test', password: 'test', firstName: 'John', lastName: 'Doe', token: 'fake-jwt-token'};
    return of(null).pipe(mergeMap(() => {

        if (request.url.endsWith('/oauth/token') && request.method === 'POST') {
          if (request.body.username === TEST_USER.username && request.body.password === TEST_USER.password) {
            let body = TEST_USER;
            return of(new HttpResponse({status: 200, body}));
          } else {
            return throwError({error: {message: 'Username or password is incorrect'}});
          }
        }

        if (request.url.endsWith('/users') && request.method === 'GET') {

          if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            return of(new HttpResponse({ status:200, body: [TEST_USER]}));
          } else {
            return throwError({error: {message: 'Unauthorised'}});
          }
        }

        return next.handle(request);

      }))

      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize())
  }
}

export let fakerInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakerInterceptor,
  multi: true
};
