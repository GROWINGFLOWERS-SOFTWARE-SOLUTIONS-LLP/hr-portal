import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService, ForgotPasswordRequest } from '../../Services/Employee/employee.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  forgetForm: FormGroup;
  submitted = false;

constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeeService) {
    this.forgetForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        newPassword: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      },
      { validator: this.matchPasswords }
    );
  }

  get f() {
    return this.forgetForm.controls;
  }

  matchPasswords(group: FormGroup) {
    const pass = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit() {
  this.submitted = true;

  if (this.forgetForm.valid) {
    const request: ForgotPasswordRequest = {
      email: this.forgetForm.value.email,
      newPassword: this.forgetForm.value.newPassword,
      retypeNewPassword: this.forgetForm.value.confirmPassword
    };

    this.employeeService.forgotPassword(request).subscribe({
      next: (res) => {
        alert(res.message);  // Show backend success message
        this.router.navigate(['/login']);  // Redirect to login page
      },
      error: (err) => {
        alert(err.error.message || 'Failed to reset password');
      }
    });
  }
}
}