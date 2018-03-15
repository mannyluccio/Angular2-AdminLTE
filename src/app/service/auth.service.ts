import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ApplicationHttpClient} from '../resource/http.factory';

@Injectable()
export class AuthService {

    private _token;

    constructor(private _http: ApplicationHttpClient) {
    }

    login(username: string, password: string): Observable<Response> {
        return this._http.Post('/auth', {email: username, password: password });
    }
    get token() {
        return this._token;
    }

    set token(value) {
        this._token = value;
    }
}
