import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../core/services/merchant.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private merchant: MerchantService) {}

  ngOnInit() {
    this.merchant.getProducts().subscribe((res: any) => (this.products = res));
  }
}
