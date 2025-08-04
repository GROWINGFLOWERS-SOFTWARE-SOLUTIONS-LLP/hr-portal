import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private fb: FormBuilder, private router: Router) {
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
      // Show alert popup
      alert('Password changed successfully! Redirecting to login...');
      
      // Redirect to login
      this.router.navigate(['/login']);
    }
  }
}
