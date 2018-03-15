import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-layout',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    constructor(private authService: AuthService) {}

    ngOnInit() {
    }

    ngOnDestroy() {
    }

}
