import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    CardModule,
    CalendarModule,],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css'
})
export class AnnouncementsComponent {
 // Announcement Code
  showDialog: boolean = false;

  announcement = {
    title: '',
    description: '',
    date: null
  };

  submitAnnouncement() {
    console.log('Submitted Announcement:', this.announcement);
    this.showDialog = false;

    // Reset form
    this.announcement = {
      title: '',
      description: '',
      date: null
    };
  }
  announcements = [
    {
      name: 'Mar Rueda',
      avatar: 'https://i.pravatar.cc/100?img=1',
      message: 'A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...',
      date: new Date(),
      time: '9:23 PM',
      likes: 16
    },
    {
      name: 'Vincent Luggers',
      avatar: 'https://i.pravatar.cc/100?img=2',
      message: 'I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...',
      date: new Date(),
      time: '9:23 PM',
      likes: 22
    },
    {
      name: 'Vincent Luggers',
      avatar: 'https://i.pravatar.cc/100?img=2',
      message: 'I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...',
      date: new Date(),
      time: '9:23 PM',
      likes: 22
    },
    {
      name: 'Vincent Luggers',
      avatar: 'https://i.pravatar.cc/100?img=2',
      message: 'I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot...',
      date: new Date(),
      time: '9:23 PM',
      likes: 22
    },

  ];

}
