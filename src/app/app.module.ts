import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayoutComponent} from './app-layout/layout.component';
import {HeaderComponent} from './app-layout/header/header.component';
import {SidebarComponent} from './app-layout/sidebar/sidebar.component';
import {FooterComponent} from './app-layout/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ApplicationHttpClient, applicationHttpClientCreator} from './resource/http.factory';
import {CustomHttpInterceptor} from './resource/http.interceptor';
import {AuthService} from './service/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
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
