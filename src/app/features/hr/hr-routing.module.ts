import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LettersComponent } from './letters/letters.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ResignationComponent } from './resignation/resignation.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MyHrComponent } from './my-hr/my-hr.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'letters', component: LettersComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'resignation', component: ResignationComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'my-hr', component: MyHrComponent },
  { path: 'help', component: HelpComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
