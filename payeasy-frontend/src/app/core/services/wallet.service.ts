import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WalletService {
  constructor(private http: HttpClient) {}

  addMoney(data: any) {
    return this.http.post(`${environment.apiUrl}/wallet/add`, data);
  }

  getBalance() {
    return this.http.get(`${environment.apiUrl}/wallet/balance`);
  }

  transfer(data: any) {
    return this.http.post(`${environment.apiUrl}/wallet/transfer`, data);
  }
}
