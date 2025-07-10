import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
export class AnnouncementsComponent {
  showDialog: boolean = false;

  announcement = {
    title: '',
    description: '',
    date: null
  };

  announcements = [
    {
      name: 'Mar Rueda',
      avatar: 'https://i.pravatar.cc/100?img=1',
      message: 'A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...',
      date: new Date(),
      time: '9:23 PM',
      likes: 16
    },
    {
      name: 'Vincent Luggers',
      avatar: 'https://i.pravatar.cc/100?img=2',
      message: 'I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot..I am alone, and feel the charm of existence in this spot..I am alone, and feel the charm of existence in this spot..I am alone, and feel the charm of existence in this spot..',
      date: new Date(),
      time: '9:23 PM',
      likes: 22
    },
    {
      name: 'Alice Smith',
      avatar: 'https://i.pravatar.cc/100?img=3',
      message: 'Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...',
      date: new Date(),
      time: '9:24 PM',
      likes: 5
    },
    {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/100?img=4',
      message: 'Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...',
      date: new Date(),
      time: '9:25 PM',
      likes: 0
    },
     {
      name: 'Vincent Luggers',
      avatar: 'https://i.pravatar.cc/100?img=1',
      message: 'A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...A wonderful serenity has taken possession of my entire soul...',
      date: new Date(),
      time: '9:23 PM',
      likes: 16
    },
    {
      name: 'Mar Rueda',
      avatar: 'https://i.pravatar.cc/100?img=2',
      message: 'I am alone, and feel the charm of existence in this spot...I am alone, and feel the charm of existence in this spot..I am alone, and feel the charm of existence in this spot..I am alone, and feel the charm of existence in this spot..I am alone, and feel the charm of existence in this spot..',
      date: new Date(),
      time: '9:23 PM',
      likes: 22
    },
    {
      name: 'Alice Smith',
      avatar: 'https://i.pravatar.cc/100?img=3',
      message: 'Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...Even the all-powerful Pointing has no control...',
      date: new Date(),
      time: '9:24 PM',
      likes: 5
    },
    {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/100?img=4',
      message: 'Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...Far far away, behind the word mountains...',
      date: new Date(),
      time: '9:25 PM',
      likes: 0
    },
  ];

  paginatedAnnouncements: any[] = [];
  first: number = 0;
  rows: number = 3;

  ngOnInit() {
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

  submitAnnouncement() {
    const now = new Date();
    this.announcements.unshift({
      name: 'New Announcement',
      avatar: 'https://i.pravatar.cc/100?img=5',
      message: this.announcement.description,
      date: this.announcement.date || now,
      time: now.toLocaleTimeString(),
      likes: 0
    });
    this.showDialog = false;

    this.announcement = {
      title: '',
      description: '',
      date: null
    };

    this.first = 0;
    this.updatePaginatedAnnouncements();
  }
}
