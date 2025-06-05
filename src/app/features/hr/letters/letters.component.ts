import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, TableModule, TooltipModule, DialogModule],
  templateUrl: './letters.component.html',
  styleUrl: './letters.component.css'
})
export class LettersComponent {
 showForm = false;
  isEditMode = false;
  selectedLetter: string = '';
  selectedIndex: number | null = null;
  file: File | null = null;
  fileName: string = '';
  newEmpName: string = '';
  
  letterTypes = [
    { label: 'Offer Letter', value: 'Offer Letter' },
    { label: 'Address Confirmation Letter', value: 'Address Confirmation Letter' },
    { label: 'Relieving Letter', value: 'Relieving Letter' },
    { label: 'Experience Letter', value: 'Experience Letter' },
    { label: 'Promotion Letter', value: 'Promotion Letter' },
    { label: 'Warning/Disciplinary Letter', value: 'Warning/Disciplinary Letter' },
    { label: 'Appointment Letter', value: 'Appointment Letter' },
    { label: 'Internship Letter', value: 'Internship Letter' },
  ];

  letters: any[] = [];

  toggleView() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetForm();
  }

  onFileSelect(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
  }

  uploadDocument() {
    if (!this.newEmpName || !this.selectedLetter || !this.fileName) {
      alert('Please fill all fields');
      return;
    }

    const letterData = {
      empName: this.newEmpName,
      type: this.selectedLetter,
      fileName: this.fileName,
      filePath: `assets/files/${this.fileName}`
    };

    if (this.isEditMode && this.selectedIndex !== null) {
      this.letters[this.selectedIndex] = letterData;
      this.isEditMode = false;
    } else {
      this.letters.push(letterData);
    }

    this.toggleView();
  }

  editLetter(index: number) {
    const letter = this.letters[index];
    this.newEmpName = letter.empName; 
    this.selectedLetter = letter.type;
    this.fileName = letter.fileName;
    this.isEditMode = true;
    this.selectedIndex = index;
    this.showForm = true;
  }

  deleteLetter(index: number) {
    if (confirm('Are you sure to delete this letter?')) {
      this.letters.splice(index, 1);
    }
  }

  resetForm() {
    this.newEmpName = ''; 
    this.selectedLetter = '';
    this.file = null;
    this.fileName = '';
    this.isEditMode = false;
    this.selectedIndex = null;
  }

  viewFile(letter: any) {
  const filePath = letter.filePath;  
  window.open(filePath, '_blank');  
}
}
