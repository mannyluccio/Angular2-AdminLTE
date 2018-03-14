import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from '../service/auth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
        return next.handle(this.addToken(req))
            .do(event => {
                if (event instanceof HttpResponse) {
                    console.log('success');
                }
            })
            .catch(err => {
                return Observable.throw(err);
            });
    }

    addToken(req: HttpRequest<any>): HttpRequest<any> {
        console.log('token')
        const token = '';
        if (token !== '') {
            return req.clone({setHeaders: {Authorization: 'Bearer ' + token}});
        }
        return req;

    }
}
