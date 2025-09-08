import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BillService {
  constructor(private http: HttpClient) {}

  payBill(data: any) {
    return this.http.post(`${environment.apiUrl}/bills/pay`, data);
  }

  saveBiller(data: any) {
    return this.http.post(`${environment.apiUrl}/bills/save`, data);
  }

  listBillers() {
    return this.http.get(`${environment.apiUrl}/bills/list`);
  }
}
