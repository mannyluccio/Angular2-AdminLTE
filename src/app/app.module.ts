import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StarterComponent} from './starter/starter.component';
import {StarterHeaderComponent} from './starter/starter-header/starter-header.component';
import {StarterLeftSideComponent} from './starter/starter-left-side/starter-left-side.component';
import {StarterContentComponent} from './starter/starter-content/starter-content.component';
import {StarterFooterComponent} from './starter/starter-footer/starter-footer.component';
import {StarterControlSidebarComponent} from './starter/starter-control-sidebar/starter-control-sidebar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ApplicationHttpClient, applicationHttpClientCreator} from './resource/http.factory';
import {AuthService} from './service/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        StarterComponent,
        StarterHeaderComponent,
        StarterLeftSideComponent,
        StarterContentComponent,
        StarterFooterComponent,
        StarterControlSidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        HttpClientModule,
    ],
    providers: [
        // Providing the ApplicationHttpClient so it could be used as a service.
        {
            provide: ApplicationHttpClient,
            useFactory: applicationHttpClientCreator,
            deps: [HttpClient]
        },
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
