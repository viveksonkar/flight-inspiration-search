import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  skipAuthentication: boolean = false;

  constructor(private _auth: AuthService) { }

  /**
   * In order to hit CMD dev URLs UI should skip the interceptor.
   * UI will still keep sending Authorization token to access other FCP API Urls. It skips only for CMD dev URLs
   * This is just a work around solution. Skiping Interceptor will be reverted once we find the solution to hit the CMD production URLs from UI.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let skipAuthorization = request.headers.has('InterceptorSkipHeader');
    if (this.skipAuthentication) {
      skipAuthorization = this.skipAuthentication;
    }
    if (!skipAuthorization) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._auth.getToken()}`
        }
      });
      return next.handle(request);
    } else {
      const headers = request.headers.delete('InterceptorSkipHeader');
      return next.handle(request.clone({headers}));
    }
  }

}
