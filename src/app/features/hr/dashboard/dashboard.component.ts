// src/app/dashboard/dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService, HolidayCalenderDTO } from '../../../Services/Employee/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule, CalendarModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedDate: Date = new Date();
  showCalendar: boolean = false;

  totalEmployees = 0;
  totalResignations = 0;
  upcomingHolidays: HolidayCalenderDTO[] = [];

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

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getDashboardSummary().subscribe(response => {
      const data = response.data;
      this.totalEmployees = data.totalEmployees;
      this.totalResignations = data.totalResignations;
      this.upcomingHolidays = data.upcomingHolidays;

      this.pieChartData = {
        labels: ['Registered', 'Interviewed', 'Hold', 'Selected', 'Joined'],
        datasets: [
          {
            data: [
              this.totalEmployees, // Registered
              2, // Interviewed
              1, // Hold
              5, // Selected
              2  // Joined
            ],
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#d83434'],
            hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8', '#fa7070']
          }
        ]
      };
    });

    // Optional static bar data
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
