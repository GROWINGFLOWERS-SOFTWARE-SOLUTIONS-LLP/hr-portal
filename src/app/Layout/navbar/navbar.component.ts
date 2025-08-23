import { Component, HostListener, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [DatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  today: string = '';
  role: string = 'HR';      // Set dynamically based on logged user
  sidebarVisible: boolean = false;
  isMobile: boolean = false;
  private router = inject(Router);

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.today = this.datePipe.transform(new Date(), 'fullDate') ?? '';

    // ✅ Suppose user details are stored in localStorage after login
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.role) {
      this.role = user.role || 'EMPLOYEE';
    }

    this.checkScreenSize();
  }

  // Detect screen resize
  @HostListener('window:resize', [])
  onWindowResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) this.sidebarVisible = false; // close on small screens by default
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  goToProfile() {
    this.router.navigateByUrl('/my-profile');  // 👈 Redirect to My Profile UI
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
