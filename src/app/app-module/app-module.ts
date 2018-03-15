import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './app-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {AuthGuard} from '../service/auth.guard';

const appRoutes: Routes = [
    {
        path: '', component: LayoutComponent, canActivate: [AuthGuard],
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: DashboardComponent},
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
    providers: [AuthGuard]
})
export default class HomeModule {
}
