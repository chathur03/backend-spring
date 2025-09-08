import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TransactionHistoryComponent } from './transaction-history.component';

const routes: Routes = [{ path: '', component: TransactionHistoryComponent }];

@NgModule({
  declarations: [TransactionHistoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MatTableModule]
})
export class TransactionsModule {}
