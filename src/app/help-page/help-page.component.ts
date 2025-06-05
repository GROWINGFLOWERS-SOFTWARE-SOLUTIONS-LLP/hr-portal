import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';

interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

interface Ticket {
  id: number;
  title: string;
  employee: string;
  messages: Message[];
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
}

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css',
})
export class HelpPageComponent {
  tickets: Ticket[] = [
    {
      id: 1,
      title: 'Leave Request Clarification',
      employee: 'Amol Jadhav',
      status: 'Open',
      createdAt: '2025-05-20T10:00:00Z',
      messages: [
        {
          sender: 'Amol Jadhav',
          text: 'Can I carry forward unused leaves?',
          timestamp: '2025-05-20T10:01:00Z',
        },
        {
          sender: 'HR',
          text: 'Yes, up to 10 days can be carried over.',
          timestamp: '2025-05-20T11:00:00Z',
        },
      ],
    },
    {
      id: 2,
      title: 'Payroll Mismatch',
      employee: 'Sahil Dashpute',
      status: 'In Progress',
      createdAt: '2025-05-18T14:30:00Z',
      messages: [
        {
          sender: 'Sahil Dashpute',
          text: 'My salary is less than expected.',
          timestamp: '2025-05-18T14:31:00Z',
        },
        {
          sender: 'HR',
          text: 'We are investigating this issue.',
          timestamp: '2025-05-18T15:00:00Z',
        },
      ],
    },
    {
      id: 3,
      title: 'Work From Home Policy',
      employee: 'Sadhana Rai',
      status: 'Resolved',
      createdAt: '2025-05-15T09:20:00Z',
      messages: [
        {
          sender: 'Sadhana Rai',
          text: 'How many WFH days allowed?',
          timestamp: '2025-05-15T09:22:00Z',
        },
        {
          sender: 'HR',
          text: 'Up to 3 per month with approval.',
          timestamp: '2025-05-15T10:00:00Z',
        },
      ],
    },
    {
      id: 4,
      title: 'Tax Declaration Help',
      employee: 'Abhishek Amrutkar',
      status: 'Open',
      createdAt: '2025-05-14T12:00:00Z',
      messages: [
        {
          sender: 'Abhishek Amrutkar',
          text: 'Need help with HRA input.',
          timestamp: '2025-05-14T12:01:00Z',
        },
        {
          sender: 'HR',
          text: 'Please upload your rent receipts.',
          timestamp: '2025-05-14T12:30:00Z',
        },
      ],
    },
    {
      id: 5,
      title: 'Performance Bonus Query',
      employee: 'Swapnil Joshi',
      status: 'Resolved',
      createdAt: '2025-05-13T08:00:00Z',
      messages: [
        {
          sender: 'Swapnil Joshi',
          text: 'When is bonus credited?',
          timestamp: '2025-05-13T08:05:00Z',
        },
        {
          sender: 'HR',
          text: 'End of this quarter.',
          timestamp: '2025-05-13T09:00:00Z',
        },
      ],
    },
    {
      id: 6,
      title: 'ID Card Not Received',
      employee: 'Geeta Rai',
      status: 'In Progress',
      createdAt: '2025-05-12T15:00:00Z',
      messages: [
        {
          sender: 'Geeta Rai',
          text: 'Still waiting for my ID card.',
          timestamp: '2025-05-12T15:10:00Z',
        },
        {
          sender: 'HR',
          text: 'Checking with admin team.',
          timestamp: '2025-05-12T16:00:00Z',
        },
      ],
    },
    {
      id: 7,
      title: 'Laptop Replacement Request',
      employee: 'George Young',
      status: 'Open',
      createdAt: '2025-05-11T11:45:00Z',
      messages: [
        {
          sender: 'George Young',
          text: 'My laptop is overheating.',
          timestamp: '2025-05-11T11:46:00Z',
        },
      ],
    },
    {
      id: 8,
      title: 'Office Relocation Notice',
      employee: 'Pooja Thorat',
      status: 'Resolved',
      createdAt: '2025-05-10T09:00:00Z',
      messages: [
        {
          sender: 'Pooja Thorat',
          text: 'When is the new office move?',
          timestamp: '2025-05-10T09:10:00Z',
        },
        {
          sender: 'HR',
          text: 'Scheduled for June 5th.',
          timestamp: '2025-05-10T10:00:00Z',
        },
      ],
    },
    {
      id: 9,
      title: 'Holiday Calendar',
      employee: 'Irfan Khan',
      status: 'Open',
      createdAt: '2025-05-09T13:00:00Z',
      messages: [
        {
          sender: 'Irfan Khan',
          text: 'Is Diwali a holiday?',
          timestamp: '2025-05-09T13:01:00Z',
        },
      ],
    },
    {
      id: 10,
      title: 'Medical Insurance Info',
      employee: 'Jane Doe',
      status: 'In Progress',
      createdAt: '2025-05-08T16:00:00Z',
      messages: [
        {
          sender: 'Jane Doe',
          text: 'How to add dependents to insurance?',
          timestamp: '2025-05-08T16:01:00Z',
        },
        {
          sender: 'HR',
          text: 'Submit dependent info in portal.',
          timestamp: '2025-05-08T17:00:00Z',
        },
      ],
    },
    {
      id: 11,
      title: 'Training Schedule',
      employee: 'Yash Dargude',
      status: 'Resolved',
      createdAt: '2025-05-07T10:00:00Z',
      messages: [
        {
          sender: 'Yash Dargude',
          text: 'When is next training?',
          timestamp: '2025-05-07T10:01:00Z',
        },
        {
          sender: 'HR',
          text: 'Next week, Tuesday.',
          timestamp: '2025-05-07T11:00:00Z',
        },
      ],
    },
    {
      id: 12,
      title: 'Access Card Lost',
      employee: 'Lily Chen',
      status: 'Open',
      createdAt: '2025-05-06T09:30:00Z',
      messages: [
        {
          sender: 'Lily Chen',
          text: 'I lost my access card.',
          timestamp: '2025-05-06T09:31:00Z',
        },
        {
          sender: 'HR',
          text: 'Please collect a temporary one from security.',
          timestamp: '2025-05-06T10:00:00Z',
        },
      ],
    },
  ];
  columns: any;

  getTicketsByStatus(status: 'Open' | 'In Progress' | 'Resolved'): Ticket[] {
    return this.tickets.filter((t) => t.status === status);
  }

  onDrop(event: any, status: 'Open' | 'In Progress' | 'Resolved') {
    const draggedTicket: Ticket = event.dragData;
    const index = this.tickets.findIndex((t) => t.id === draggedTicket.id);
    if (index !== -1) {
      this.tickets[index].status = status;
    }
  }

  trackByTicketId(index: number, ticket: Ticket) {
    return ticket.id;
  }
}
