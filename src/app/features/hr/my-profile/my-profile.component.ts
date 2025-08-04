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

  constructor(private router: Router) {}

  user = {
    name: 'Prasad Amrutkar',
    jobTitle: 'Software Developer',
    location: 'Pune, India',
    dob: '',
    gender: '',
    address: '',
    nationality: '',
    contactNumber: '',
    email: '',
    jobRole: '',
    designation: '',
    joiningDate: '',
  };

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  saveProfile() {
    this.isEdit = false;
    alert('Profile saved!');
    this.router.navigate(['../navbar/dashboard']);
  }

  onPhotoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      alert('Photo selected: ' + file.name);
    }
  }
}
