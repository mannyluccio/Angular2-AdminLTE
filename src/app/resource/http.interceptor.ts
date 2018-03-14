import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>,
                     next: HttpHandler): Observable<HttpEvent<any>> {

        const clonedRequest: HttpRequest<any> = req.clone({
            url: 'https://someurl.example/'
        });

        return next.handle(clonedRequest);
    }

}
