import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
    selector: 'app-starter',
    templateUrl: './starter.component.html',
    styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit, OnDestroy {

    bodyClasses = 'skin-blue sidebar-mini';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
        // Example of http call
        this.authService.login('engageSuperAdmin', 'Test1234').subscribe(
            data => {
                console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
            },
            error => {
                // console.log(error); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
            },
        );
    }

    ngOnDestroy() {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    }

}