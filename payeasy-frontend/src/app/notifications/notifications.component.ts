import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private service: NotificationService) {}

  ngOnInit() {
    this.service.getRecent().subscribe((res: any) => (this.notifications = res));
  }
}
