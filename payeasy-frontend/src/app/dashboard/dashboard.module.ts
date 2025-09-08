import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UserDashboardComponent } from './user-dashboard.component';
import { MerchantDashboardComponent } from './merchant-dashboard.component';

const routes: Routes = [
  { path: 'user', component: UserDashboardComponent },
  { path: 'merchant', component: MerchantDashboardComponent }
];

@NgModule({
  declarations: [UserDashboardComponent, MerchantDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule]
})
export class DashboardModule {}
