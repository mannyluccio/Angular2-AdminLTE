import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ApplicationHttpClient, applicationHttpClientCreator} from './resource/http.factory';
import {CustomHttpInterceptor} from './resource/http.interceptor';
import {AuthService} from './service/auth.service';
import {LayoutComponent} from './app-module/layout.component';
import {HeaderComponent} from './app-module/header/header.component';
import {SidebarComponent} from './app-module/sidebar/sidebar.component';
import {FooterComponent} from './app-module/footer/footer.component';
import {DashboardComponent} from './app-module/dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
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
