import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ApiResponse, EmployeeService } from '../../../Services/Employee/employee.service';

interface ResignationRequest {
  empName: string;
  resignDate: Date;
  lastWorkingDate: Date;
  reason: string;
  noticePeriodDays: number;
}

@Component({
  selector: 'app-resignation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './resignation.component.html',
  styleUrls: ['./resignation.component.css']
})
export class ResignationComponent implements OnInit {

  employeeOptions: { label: string; value: string }[] = [];

  resignation: ResignationRequest = {
    empName: '',
    resignDate: new Date(),
    lastWorkingDate: new Date(),
    reason: '',
    noticePeriodDays: 0
  };

  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient,
    private msg: MessageService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<ApiResponse<any[]>>('http://localhost:8446/api/employees')
      .subscribe(res => {
        if (res.status === 'success' && res.data) {
          this.employeeOptions = res.data.map(e => ({
            label: `${e.firstName} ${e.lastName}`,
            value: `${e.firstName} ${e.lastName}`
          }));
        }
      });
  }

  submitResignation() {
    this.http.post<ApiResponse<any>>('http://localhost:8446/api/resignations', this.resignation)
      .subscribe({
        next: (res) => {
          if (res.status === 'success') {
            // Show toast in top-right corner
            this.msg.add({ 
              severity: 'success', 
              summary: 'Submitted resignation.. Waiting For the approval', 
              detail: '', 
              life: 4000 
            });

            // Reset form
            this.resignation = {
              empName: '',
              resignDate: new Date(),
              lastWorkingDate: new Date(),
              reason: '',
              noticePeriodDays: 0
            };
          } else {
            this.msg.add({ severity: 'error', summary: 'Error', detail: res.message });
          }
        },
        error: (err) => {
          this.msg.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error.message || 'Failed to submit resignation'
          });
        }
      });
  }
}
