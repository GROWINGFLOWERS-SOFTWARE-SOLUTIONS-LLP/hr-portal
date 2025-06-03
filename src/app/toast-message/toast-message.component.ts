import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [ToastModule, CommonModule],
  providers: [MessageService],
  template: `<p-toast></p-toast>`
})
export class ToastMessageComponent {
  constructor(private messageService: MessageService) {}

  showMessage(severity: 'success' | 'error' | 'info' | 'warn', summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

  clear() {
    this.messageService.clear();
  }
}
