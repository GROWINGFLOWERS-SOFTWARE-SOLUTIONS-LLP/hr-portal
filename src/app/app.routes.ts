import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AnnouncementsComponent } from './features/hr/announcements/announcements.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { DashboardComponent } from './features/hr/dashboard/dashboard.component';
import { LettersComponent } from './features/hr/letters/letters.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';

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
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
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
  {
    path: 'letters',
    component: LettersComponent,
  }
];
