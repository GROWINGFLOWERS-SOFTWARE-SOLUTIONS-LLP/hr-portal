import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EmployeeService, LetterEntity } from '../../../Services/Employee/employee.service';

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [
    CommonModule, TableModule, FileUploadModule, ButtonModule, DropdownModule,
    DialogModule, ToastModule, ConfirmDialogModule, InputTextModule, FormsModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {
  letters: LetterEntity[] = [];
  displayUploadDialog = false;
  uploadData: any = { employeeName: '', letterType: '', file: null };
  letterTypes = [{ label: 'Offer Letter', value: 'Offer Letter' }, { label: 'Experience Letter', value: 'Experience Letter' }];
  
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadLetters();
  }

  loadLetters() {
    this.employeeService.getAllLetters().subscribe(res => {
      this.letters = res.data;
    });
  }

  openUploadDialog() {
    this.uploadData = { employeeName: '', letterType: '', file: null };
    this.displayUploadDialog = true;
  }

  handleFileSelect(event: any) {
    this.uploadData.file = event.files[0];
  }

  uploadLetter() {
    if (!this.uploadData.employeeName || !this.uploadData.letterType || !this.uploadData.file) {
      this.messageService.add({ severity: 'warn', summary: 'Missing Data', detail: 'Please fill all fields' });
      return;
    }

    const formData = new FormData();
    formData.append('employeeName', this.uploadData.employeeName);
    formData.append('letterType', this.uploadData.letterType);
    formData.append('file', this.uploadData.file);

    this.employeeService.uploadLetter(formData).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Uploaded', detail: 'Letter uploaded successfully' });
        this.displayUploadDialog = false;
        this.loadLetters();
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Upload failed' });
      }
    });
  }

  confirmDelete(letterId: string) {
    this.confirmService.confirm({
      message: 'Are you sure you want to delete this letter?',
      accept: () => {
        this.employeeService.deleteLetter(letterId).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Letter deleted successfully' });
          this.loadLetters();
        });
      }
    });
  }

  downloadLetter(letterId: string, fileName: string) {
    this.employeeService.downloadLetter(letterId).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
