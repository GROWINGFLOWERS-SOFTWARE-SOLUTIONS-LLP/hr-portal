import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AnnouncementsComponent } from './features/hr/announcements/announcements.component';
import { HelpPageComponent } from './help-page/help-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'announcement',
    component: AnnouncementsComponent,
  },
  {
    path: 'help',
    component: HelpPageComponent,
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./features/hr/hr.module').then((m) => m.HrModule),
  },
];
