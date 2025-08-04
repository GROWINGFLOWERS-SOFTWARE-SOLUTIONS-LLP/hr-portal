// src/app/components/holidays/holidays.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { EmployeeService, HolidayEntity } from '../../../Services/Employee/employee.service';

@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css'
})
export class HolidaysComponent implements OnInit {
  publicHolidays: HolidayEntity[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadHolidays();
  }

  loadHolidays(): void {
    this.employeeService.getAllHolidays().subscribe({
      next: (res) => {
        this.publicHolidays = res.data;
      },
      error: (err) => {
        console.error('Failed to fetch holidays', err);
      }
    });
  }
}
