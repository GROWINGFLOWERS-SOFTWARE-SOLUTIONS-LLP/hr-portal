import { Component, HostListener, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SidebarModule, PanelMenuModule, ButtonModule, RouterModule],
  providers: [DatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  today: string = '';   // initialize empty first
  role: string = "HR";
  sidebarVisible: boolean = true;
  isMobile: boolean = false;
  userName: string | null = null;
  private router = inject(Router);

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.today = this.datePipe.transform(new Date(), 'fullDate') ?? '';
    this.checkScreenSize();
  }

  // Detect window resize to set isMobile flag
  @HostListener('window:resize', [])
  onWindowResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout() {
    // 🔒 Add your logout logic here
    // this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
