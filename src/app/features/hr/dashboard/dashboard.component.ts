import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule, CalendarModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 selectedDate: Date = new Date();
  showCalendar: boolean = false;

  pieChartData: any;
  barChartData: any;

  pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  ngOnInit() {
    this.pieChartData = {
      labels: ['Registered', 'Interviewed', 'Hold', 'Selected','Joined'],
      datasets: [
        {
          data: [12, 2, 1, 5,2],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC','#d83434'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8','#fa7070']
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
          data: [15, 4, 6, 7, 3]
        }
      ]
    };
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }
}