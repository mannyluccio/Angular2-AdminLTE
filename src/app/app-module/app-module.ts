import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './app-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';

const appRoutes: Routes = [
    {
        path: 'home', component: LayoutComponent,
        children: [
            {path: '', component: DashboardComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes),
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        DashboardComponent
    ],
    providers: []
})
export default class HomeModule {
}
