import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ApplicationHttpClient, applicationHttpClientCreator} from './resource/http.factory';
import {CustomHttpInterceptor} from './resource/http.interceptor';
import {AuthService} from './service/auth.service';
import LoginModule from './login-module/login-module';
import {RouterModule} from '@angular/router';
import HomeModule from './app-module/app-module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: 'home', pathMatch: 'full'},
        ]),
        BrowserModule,
        HttpClientModule,
        LoginModule,
        HomeModule,
    ],
    providers: [
        // Providing the ApplicationHttpClient so it could be used as a service.
        {
            provide: ApplicationHttpClient,
            useFactory: applicationHttpClientCreator,
            deps: [HttpClient]
        },
        { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
