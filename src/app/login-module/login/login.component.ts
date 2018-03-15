import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    private email;
    private password;

    constructor(private authService: AuthService,
                private router: Router) {
    }


    login(form) {
        if (form.form.invalid) {
            return;
        }

        this.authService.login(this.email, this.password).subscribe(
            data => {
                this.authService.processLogin(data.data.token);
                this.router.navigate(['/home']);
            },
            error => {
                // error message
            },
        );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

}
