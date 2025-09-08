import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  declarations: [ProductListComponent, CartComponent, CheckoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MatGridListModule, MatButtonModule]
})
export class EcommerceModule {}
