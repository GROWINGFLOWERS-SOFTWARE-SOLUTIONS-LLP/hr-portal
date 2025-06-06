import { Component } from '@angular/core';
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
    CommonModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    AvatarModule,RouterModule
  ],  
   templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
sidebarVisible = false;
  activeSection = 'Dashboard';

  profileMenu: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', command: () => this.onProfile() },
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.onLogout() }
  ];

  menuItems = [
  { label: 'Dashboard', icon: 'pi pi-th-large', route: '/dashboard' },
  { label: 'Letters', icon: 'pi pi-file', route: '/letters' },
  { label: 'Meeting', icon: 'pi pi-calendar', route: '/hr/meeting' },
  { label: 'My HR', icon: 'pi pi-user', route: '/hr/myhr' },
  { label: 'Holiday', icon: 'pi pi-sun', route: '/hr/holiday' },
  { label: 'Announcement', icon: 'pi pi-bell', route: '/announcement' },
  { label: 'Resignation', icon: 'pi pi-sign-out', route: '/hr/resignation' },
  { label: 'Help', icon: 'pi pi-question-circle', route: '/help' },
];


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  selectSection(section: string) {
    this.activeSection = section;
  }

  onProfile() {
    console.log('Profile clicked');
  }

  onLogout() {
    console.log('Logout clicked');
  }
}