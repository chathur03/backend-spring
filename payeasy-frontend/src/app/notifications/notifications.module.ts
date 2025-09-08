import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [{ path: '', component: NotificationsComponent }];

@NgModule({
  declarations: [NotificationsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MatListModule]
})
export class NotificationsModule {}
