import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
 
@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputTextarea,
    ButtonModule,
    TableModule
  ],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
 
  hrNames = [
  { label: 'Shruti', value: 'Shruti' },
  { label: 'Priya Patel', value: 'Priya Patel' }
];
 
  meeting = {
    employeeName: null,
    hrName: null,
    date: null,
    topic: '',
    conclusion: ''
  };
 
  selectedIndex: number | null = null;
 
  employeeOptions = [
    { name: 'Ankita Sharma', code: 'E1' },
    { name: 'Rahul Jain', code: 'E2' },
    { name: 'Sneha Patil', code: 'E3' }
  ];
 
  meetingsList: any[] = [];
 
  onSave() {
    if (this.selectedIndex !== null) {
      this.meetingsList[this.selectedIndex] = { ...this.meeting };
      this.selectedIndex = null;
    } else {
      this.meetingsList.push({ ...this.meeting });
    }
    this.onClear();
  }
 
  onEdit(index: number) {
    this.selectedIndex = index;
    this.meeting = { ...this.meetingsList[index] };
  }
 
  onClear() {
    this.meeting = {
      employeeName: null,
      hrName: null,
      date: null,
      topic: '',
      conclusion: ''
    };
    this.selectedIndex = null;
  }
}
 