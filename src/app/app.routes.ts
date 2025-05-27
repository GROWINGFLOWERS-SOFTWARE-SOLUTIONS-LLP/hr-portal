import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'hr',
        loadChildren: () =>import('./features/hr/hr.module').then(m => m.HrModule),
    },
];
