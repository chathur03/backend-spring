import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  declarations: [ProductsComponent, OrdersComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule]
})
export class MerchantModule {}
