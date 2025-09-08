import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MerchantService {
  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${environment.apiUrl}/merchant/register`, data);
  }

  getProducts() {
    return this.http.get(`${environment.apiUrl}/merchant/products`);
  }

  addProduct(data: any) {
    return this.http.post(`${environment.apiUrl}/merchant/products`, data);
  }

  updateProduct(id: number, data: any) {
    return this.http.put(`${environment.apiUrl}/merchant/products/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.apiUrl}/merchant/products/${id}`);
  }

  getOrders() {
    return this.http.get(`${environment.apiUrl}/merchant/order`);
  }
}
