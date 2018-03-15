import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        if (!localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}