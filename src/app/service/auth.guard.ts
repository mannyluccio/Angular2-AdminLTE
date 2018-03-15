import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
