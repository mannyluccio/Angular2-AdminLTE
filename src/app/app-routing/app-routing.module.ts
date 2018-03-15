import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from '../app-module/layout.component';
import {DashboardComponent} from '../app-module/dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: LayoutComponent,
                children: [
                    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                    {path: 'dashboard', component: DashboardComponent},
                ]
            },
        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
