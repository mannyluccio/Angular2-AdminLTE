import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
    selector: 'app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

    bodyClasses = 'skin-blue sidebar-mini';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    }

    ngOnDestroy() {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    }

}
