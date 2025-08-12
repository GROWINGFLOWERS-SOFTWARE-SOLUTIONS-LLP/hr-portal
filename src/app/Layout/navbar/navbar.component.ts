// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, InputTextModule, MenuModule, AvatarModule, RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  sidebarVisible = true;

  profileMenu: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', command: () => this.onProfile() },
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.onLogout() }
  ];
menuItems = [
  { label: 'Dashboard', icon: 'pi pi-th-large', route: '/navbar/dashboard' },
  { label: 'Letters', icon: 'pi pi-file', route: '/navbar/letters' },
  { label: 'Meeting', icon: 'pi pi-calendar', route: '/navbar/meeting' },
  // { label: 'My HR', icon: 'pi pi-user', route: '/navbar/my-hr' },
  { label: 'Holiday', icon: 'pi pi-sun', route: '/navbar/holidays' },
  { label: 'Announcement', icon: 'pi pi-bell', route: '/navbar/announcement' },
  { label: 'Resignation', icon: 'pi pi-sign-out', route: '/navbar/resignation' },
  { label: 'Help', icon: 'pi pi-question-circle', route: '/navbar/help' },
];


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  onProfile() {
    this.router.navigate(['/my-profile']); 
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}
