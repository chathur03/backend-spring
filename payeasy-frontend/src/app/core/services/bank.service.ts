import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BankService {
  constructor(private http: HttpClient) {}

  linkAccount(data: any) {
    return this.http.post(`${environment.apiUrl}/bank/link`, data);
  }

  listAccounts() {
    return this.http.get(`${environment.apiUrl}/bank/list`);
  }
}
