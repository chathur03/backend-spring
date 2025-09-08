import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../core/services/merchant.service';

@Component({
  selector: 'app-merchant-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private merchant: MerchantService) {}

  ngOnInit() {
    this.merchant.getOrders().subscribe((res: any) => (this.orders = res));
  }
}
