import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginLayoutComponent} from './login-layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const authRoutes: Routes = [
    {
        path: 'auth', component: LoginLayoutComponent,
        children: [
            {path: 'login', component: LoginComponent },
            {path: 'register', component: RegisterComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes),
    ],
    declarations: [
        LoginLayoutComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: []
})
export default class LoginModule {
}
