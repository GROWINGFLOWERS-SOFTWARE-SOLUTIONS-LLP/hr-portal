import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ToastMessageComponent } from '../../toast-message/toast-message.component';
import { EmployeeService } from '../../Services/Employee/employee.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
    CommonModule,
    AvatarModule,
    ToastMessageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'hr-portal';
  loginForm: FormGroup;

  @ViewChild(ToastMessageComponent) toast!: ToastMessageComponent;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService 
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.value;

    this.employeeService.login({ email: username, password }).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.showSuccess();
          setTimeout(() => this.router.navigate(['/navbar']), 1000);
        } else {
          this.showError(res.message);
        }
      },
      error: (err) => {
        const msg = err?.error?.message || 'Login Failed';
        this.showError(msg);
      }
    });
  }

  showSuccess() {
    this.toast.showMessage('success', 'Login Successful', 'Welcome back!');
  }

  showError(message: string = 'Invalid username or password') {
    this.toast.showMessage('error', 'Login Failed', message);
  }
}
