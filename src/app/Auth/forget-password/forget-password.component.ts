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
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgetForm: FormGroup;
  submitted = false;
  showSuccessPopup = false;
  popupFadingOut = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) {
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
        next: () => {
          // Show success popup
          this.showSuccessPopup = true;

          // Start fade out after 2 seconds
          setTimeout(() => {
            this.popupFadingOut = true;
          }, 2000);

          // Hide popup and redirect after fade out animation (0.4s)
          setTimeout(() => {
            this.showSuccessPopup = false;
            this.popupFadingOut = false;
            this.router.navigate(['/login']); // Redirect to login page
          }, 2400);
        },
        error: (err) => {
          alert(err.error.message || 'Failed to reset password');
        }
      });
    }
  }
}
