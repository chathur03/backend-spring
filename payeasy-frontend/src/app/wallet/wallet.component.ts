import { Component, OnInit } from '@angular/core';
import { WalletService } from '../core/services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html'
})
export class WalletComponent implements OnInit {
  balance: number = 0;
  amount: number = 0;

  constructor(private wallet: WalletService) {}

  ngOnInit() {
    this.loadBalance();
  }

  loadBalance() {
    this.wallet.getBalance().subscribe((res: any) => (this.balance = res.balance));
  }

  addMoney() {
    this.wallet.addMoney({ amount: this.amount }).subscribe(() => {
      this.amount = 0;
      this.loadBalance();
    });
  }
}
