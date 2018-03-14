import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ApplicationHttpClient} from '../resource/http.factory';

@Injectable()
export class AuthService {

    constructor(private http: ApplicationHttpClient) {
    }

    login(username: string, password: string): Observable<Response> {
        return this.http.Post('userManagement/adminUser/login', {username: username, password: password });
    }
}
