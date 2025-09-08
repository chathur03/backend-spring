import { Component, OnInit } from '@angular/core';
import { BankService } from '../core/services/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html'
})
export class BankComponent implements OnInit {
  accounts: any[] = [];
  upiId = '';

  constructor(private bank: BankService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.bank.listAccounts().subscribe((res: any) => (this.accounts = res));
  }

  link() {
    this.bank.linkAccount({ upiId: this.upiId }).subscribe(() => {
      this.upiId = '';
      this.load();
    });
  }
}
