import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-resignation',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    InputTextarea,
    CalendarModule,
    ButtonModule,
    TableModule
],
  templateUrl: './resignation.component.html',
  styleUrl: './resignation.component.css'
})
export class ResignationComponent {
 hrNames = [
    { label: 'Shruti', value: 'Shruti' },
    { label: 'Priya Patel', value: 'Priya Patel' }
  ];

  employeeOptions = [
    { name: 'Ankita Sharma', code: 'E1' },
    { name: 'Rahul Jain', code: 'E2' },
    { name: 'Sneha Patil', code: 'E3' }
  ];

  resignation = {
    employeeName: null,
    hrName: null,
    resignationDate: null,
    lastWorkingDate: null,
    reason: '',
    comments: ''
  };

  resignationsList: any[] = [];
  selectedIndex: number | null = null;

  onSave() {
    if (this.selectedIndex !== null) {
      this.resignationsList[this.selectedIndex] = { ...this.resignation };
      this.selectedIndex = null;
    } else {
      this.resignationsList.push({ ...this.resignation });
    }
    this.onClear();
 }

  onEdit(index: number) {
    this.selectedIndex = index;
    this.resignation = { ...this.resignationsList[index] };
  }

  onClear() {
    this.resignation = {
      employeeName: null,
      hrName: null,
      resignationDate: null,
      lastWorkingDate: null,
      reason: '',
      comments: ''
    };
    this.selectedIndex = null;
  }

}
