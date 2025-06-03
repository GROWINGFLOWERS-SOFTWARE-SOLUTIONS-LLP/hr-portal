import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

import { ToastMessageComponent } from '../../toast-message/toast-message.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
    CommonModule,
    AvatarModule,
    ToastMessageComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'hr-portal';
  loginForm: FormGroup;

  @ViewChild(ToastMessageComponent) toast!: ToastMessageComponent;

  constructor(private fb: FormBuilder, private router: Router) {
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

    if (username === 'user' && password === 'pass') {
      this.showSuccess();
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);
    } else {
      this.showError();
    }
  }

  showSuccess() {
    this.toast.showMessage('success', 'Login Successful', 'Welcome back!');
  }

  showError() {
    this.toast.showMessage('error', 'Login Failed', 'Invalid username or password');
  }
}
