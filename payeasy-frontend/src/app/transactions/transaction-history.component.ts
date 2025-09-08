import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../core/services/transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent implements OnInit {
  transactions: any[] = [];

  constructor(private service: TransactionService) {}

  ngOnInit() {
    this.service.history().subscribe((res: any) => (this.transactions = res));
  }
}
