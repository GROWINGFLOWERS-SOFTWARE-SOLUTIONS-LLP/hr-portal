import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './features/hr/announcements/announcements.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,AnnouncementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hr-portal';
}
