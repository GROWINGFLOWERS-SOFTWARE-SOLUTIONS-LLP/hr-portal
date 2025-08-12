import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { EmployeeService } from '../../../Services/Employee/employee.service';

interface EmployeeOption {
  name: string;
  code: string;
}

interface HrOption {
  label: string;
  value: string;
}

interface MeetingRequest {
  date: string;
  topic: string;
  attendees: string[];
  conclusion: string;
}

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
    TableModule,
    DialogModule
  ],
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent {
  employeeOptions: EmployeeOption[] = [
    { name: 'Ankita Sharma', code: 'E1' },
    { name: 'Rahul Jain', code: 'E2' },
    { name: 'Sneha Patil', code: 'E3' }
  ];

  hrNames: HrOption[] = [
    { label: 'Prasad Amrutkar', value: 'Prasad Amrutkar' },
    { label: 'Vikram Singh', value: 'Vikram Singh' }
  ];

  meeting: {
    employeeName: EmployeeOption | null;
    hrName: string | null;
    date: Date | null;
    topic: string;
    conclusion: string;
  } = {
    employeeName: null,
    hrName: null,
    date: null,
    topic: '',
    conclusion: ''
  };

  showSuccessPopup: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  formatDate(date: Date | null): string {
    if (!date) return '';
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`; // yyyy-MM-dd
  }

  onSave() {
    const attendees: string[] = [];

    if (this.meeting.employeeName?.name) {
      attendees.push(this.meeting.employeeName.name);
    }

    if (this.meeting.hrName) {
      attendees.push(this.meeting.hrName);
    }

    const request: MeetingRequest = {
      date: this.formatDate(this.meeting.date),
      topic: this.meeting.topic,
      attendees: attendees,
      conclusion: this.meeting.conclusion
    };

    console.log('Sending meeting request:', request);

    this.employeeService.createMeeting(request).subscribe({
      next: () => {
        this.showSuccessPopup = true;
        this.onClear();
      },
      error: (err) => {
        console.error('Failed to schedule meeting:', err);
        alert('❌ Failed to schedule meeting. Please try again.');
      }
    });
  }

  onClear() {
    this.meeting = {
      employeeName: null,
      hrName: null,
      date: null,
      topic: '',
      conclusion: ''
    };
  }
}
