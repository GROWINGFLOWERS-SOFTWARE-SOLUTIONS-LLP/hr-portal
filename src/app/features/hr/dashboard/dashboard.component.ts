import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
 imports: [
  MenubarModule,
  PanelMenuModule,
  CardModule,
  ButtonModule,
  InputTextModule,
  PanelModule,
  CommonModule,
  MenuModule,
  AvatarModule,
  ChartModule
  ],  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
activeSection: string = 'Dashboard';
  sidebarVisible: boolean = true;
pieChartData: any;
barChartData: any;

  menuItems = [
    { label: 'Dashboard', icon: 'pi pi-th-large', section: 'Dashboard' },
    { label: 'Letters', icon: 'pi pi-file', section: 'Letters' },
    { label: 'Meeting', icon: 'pi pi-calendar', section: 'Meeting' },
    { label: 'My HR', icon: 'pi pi-user', section: 'MyHR' },
    { label: 'Holiday', icon: 'pi pi-sun', section: 'Holiday' },
    { label: 'Announcement', icon: 'pi pi-bullhorn', section: 'Announcement' },
    { label: 'Resignation', icon: 'pi pi-sign-out', section: 'Resignation' },
    { label: 'Help', icon: 'pi pi-question-circle', section: 'Help' },
    // { label: 'Logout', icon: 'pi pi-sign-out', section: 'Logout' },
  ];

  profileMenu: MenuItem[] = [];

  ngOnInit() {
  this.profileMenu = [
    { label: 'Profile', icon: 'pi pi-user', command: () => this.onProfile() },
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.onLogout() }
  ];

  this.pieChartData = {
    labels: ['Registered', 'Mapped', 'Interviewed', 'Hold', 'Offer'],
    datasets: [
      {
        data: [12, 9, 2, 1, 5],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8', '#FF8A65']
      }
    ]
  };

  this.barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Hires',
        backgroundColor: '#42A5F5',
        data: [5, 7, 3, 6, 4]
      },
      {
        label: 'Interviews',
        backgroundColor: '#66BB6A',
        data: [8, 4, 6, 7, 3]
      }
    ]
  };
}

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
