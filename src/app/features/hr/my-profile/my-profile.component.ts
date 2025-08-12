import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { EmployeeService, ProfileResponse } from '../../../Services/Employee/employee.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    DividerModule,
    ButtonModule
  ],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profile?: ProfileResponse;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    const empId = localStorage.getItem('empId');
    if (empId) {
      this.employeeService.getProfile(empId).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.profile = res.data;
          }
        },
        error: (err) => {
          console.error('Error fetching profile:', err);
        }
      });
    }
  }
}
