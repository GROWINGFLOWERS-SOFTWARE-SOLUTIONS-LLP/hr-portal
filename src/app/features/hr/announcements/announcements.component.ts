import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import { AnnouncementEntity, AnnouncementRequest, EmployeeService } from '../../../Services/Employee/employee.service';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    CardModule,
    CalendarModule,
    PaginatorModule
  ],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  showDialog: boolean = false;
  isEditMode: boolean = false;
  editingId: string | null = null;

  announcement: AnnouncementRequest = {
    title: '',
    description: '',
    date: ''
  };

  announcements: any[] = [];
  paginatedAnnouncements: any[] = [];
  first: number = 0;
  rows: number = 3;

  // Popup flags
  showDeleteSuccessPopup = false;
  popupFadingOut = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getAllAnnouncements();
  }

  getAllAnnouncements() {
    this.employeeService.getAllAnnouncements().subscribe({
      next: (res) => {
        this.announcements = res.data.map((item: AnnouncementEntity) => ({
          announcementId: item.announcementId,
          name: item.title,
          avatar: 'https://i.pravatar.cc/100',
          message: item.description,
          date: new Date(item.date),
          time: new Date(item.date).toLocaleTimeString(),
          likes: 0,
          raw: item // Store raw object for editing
        }));
        this.updatePaginatedAnnouncements();
      },
      error: (err) => {
        console.error('Error fetching announcements:', err);
      }
    });
  }

  openEditDialog(item: any) {
    this.isEditMode = true;
    this.editingId = item.announcementId;
    this.announcement = {
      title: item.raw.title,
      description: item.raw.description,
      date: item.raw.date
    };
    this.showDialog = true;
  }

  openCreateDialog() {
    this.isEditMode = false;
    this.editingId = null;
    this.announcement = { title: '', description: '', date: '' };
    this.showDialog = true;
  }

  submitAnnouncement() {
    const request: AnnouncementRequest = {
      title: this.announcement.title,
      description: this.announcement.description,
      date: new Date(this.announcement.date).toISOString().split('T')[0]
    };

    if (this.isEditMode && this.editingId) {
      this.employeeService.updateAnnouncement(this.editingId, request).subscribe({
        next: () => {
          this.getAllAnnouncements();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error updating announcement:', err);
        }
      });
    } else {
      this.employeeService.createAnnouncement(request).subscribe({
        next: () => {
          this.getAllAnnouncements();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error creating announcement:', err);
        }
      });
    }
  }

  deleteAnnouncement(announcementId: string) {
    if (confirm('Are you sure you want to delete this announcement?')) {
      this.employeeService.deleteAnnouncement(announcementId).subscribe({
        next: () => {
          this.getAllAnnouncements();

          // Show success popup
          this.showDeleteSuccessPopup = true;

          // Start fade out after 2 seconds
          setTimeout(() => {
            this.popupFadingOut = true;
          }, 2000);

          // Hide popup after fade-out animation (0.4s)
          setTimeout(() => {
            this.showDeleteSuccessPopup = false;
            this.popupFadingOut = false;
          }, 2400);
        },
        error: (err) => {
          console.error('Error deleting announcement:', err);
        }
      });
    }
  }

  resetForm() {
    this.showDialog = false;
    this.editingId = null;
    this.isEditMode = false;
    this.announcement = { title: '', description: '', date: '' };
    this.first = 0;
    this.updatePaginatedAnnouncements();
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedAnnouncements();
  }

  updatePaginatedAnnouncements() {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedAnnouncements = this.announcements.slice(start, end);
  }
}