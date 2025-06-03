import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AnnouncementsComponent } from './features/hr/announcements/announcements.component';

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
        path: 'announcement',
        component: AnnouncementsComponent
    },

    {
        path: 'hr',
        loadChildren: () =>import('./features/hr/hr.module').then(m => m.HrModule),
    },
];
