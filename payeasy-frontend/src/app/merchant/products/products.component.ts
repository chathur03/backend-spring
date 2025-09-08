import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../core/services/merchant.service';

@Component({
  selector: 'app-merchant-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {};

  constructor(private merchant: MerchantService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.merchant.getProducts().subscribe((res: any) => (this.products = res));
  }

  add() {
    this.merchant.addProduct(this.newProduct).subscribe(() => {
      this.newProduct = {};
      this.load();
    });
  }
}
