import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {
isEdit = false;
 
  user = {
    dob: '',
    gender: '',
   
    address: '',
    nationality: '',
    contactNumber: '',
    email: '',
    jobRole: '',
    designation: '',
    joiningDate: '',
    location: ''
  };
 
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
 
  logout() {
    alert('Logged out!');
  }
 
  onPhotoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      alert('Photo selected: ' + file.name); // You can preview it here if needed
    }
  }
}
 