import { Component } from '@angular/core';
import { BillService } from '../core/services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html'
})
export class BillsComponent {
  bill: any = {};

  constructor(private bills: BillService) {}

  pay() {
    this.bills.payBill(this.bill).subscribe();
  }
}
