// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AnnouncementsComponent } from './features/hr/announcements/announcements.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { DashboardComponent } from './features/hr/dashboard/dashboard.component';
import { LettersComponent } from './features/hr/letters/letters.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { MeetingsComponent } from './features/hr/meetings/meetings.component';
import { HolidaysComponent } from './features/hr/holidays/holidays.component';
import { MyHrComponent } from './features/hr/my-hr/my-hr.component';
import { ResignationComponent } from './features/hr/resignation/resignation.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';
import { MyProfileComponent } from './features/hr/my-profile/my-profile.component';
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
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'letters', component: LettersComponent },
      { path: 'meeting', component: MeetingsComponent },
      { path: 'my-hr', component: MyHrComponent },
      { path: 'holidays', component: HolidaysComponent },
      { path: 'announcement', component: AnnouncementsComponent },
      { path: 'resignation', component: ResignationComponent },
      { path: 'help', component: HelpPageComponent },
    ],
  },
];
