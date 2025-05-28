import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
    CommonModule,AvatarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 title = 'hr-portal';

  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Show errors if any field is invalid
      return;
    }

    const { username, password, rememberMe } = this.loginForm.value;

    if (username === 'user' && password === 'pass') {

      console.log('Successfully logged in');
      // console.log('Username:', username);
      // console.log('Password:', password);
      // console.log('Remember Me:', rememberMe);
    } else {
      console.log('Invalid username or password.');
    }
  }
}
