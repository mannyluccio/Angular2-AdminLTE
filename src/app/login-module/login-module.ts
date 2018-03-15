import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginLayoutComponent} from './login-layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoginGuard} from '../service/login.guard';

const authRoutes: Routes = [
    {
        path: '', component: LoginLayoutComponent, canActivate: [LoginGuard],
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginComponent },
            {path: 'register', component: RegisterComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes),
        CommonModule,
        FormsModule,
    ],
    declarations: [
        LoginLayoutComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [LoginGuard]
})
export default class LoginModule {
}
