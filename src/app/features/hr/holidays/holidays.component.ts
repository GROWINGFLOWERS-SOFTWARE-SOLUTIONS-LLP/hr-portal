import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [ CommonModule, CardModule],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css'
})
export class HolidaysComponent {
holidayList = [
    { name: 'New Year', date: '2025-01-01', day: '(Wednesday)' },
    { name: 'Republic Day', date: '2025-01-26', day: '(Sunday)' },
    { name: 'Holi', date: '2025-03-14', day: '(Friday)' },
    { name: 'Good Friday', date: '2025-04-18', day: '(Friday)' },
    { name: 'Eid al-Fitr', date: '2025-04-21', day: '(Monday)' },
    { name: 'Independence Day', date: '2025-08-15', day: '(Friday)' },
    { name: 'Raksha Bandhan', date: '2025-08-19', day: '(Saturday)' },
    { name: 'Gandhi Jayanti', date: '2025-10-02', day: '(Thursday)' },
    { name: 'Diwali', date: '2025-10-20', day: '(Monday)' },
  ];

  optionholiday = [
    { name: 'Holi', date: '2025-03-14', day: '(Friday)' },
    { name: 'Good Friday', date: '2025-04-18', day: '(Friday)' }
  ];
}
