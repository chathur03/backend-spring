import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  constructor(private http: HttpClient) {}

  history() {
    return this.http.get(`${environment.apiUrl}/transactions/history`);
  }

  filter(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      httpParams = httpParams.set(key, params[key]);
    });
    return this.http.get(`${environment.apiUrl}/transactions/filter`, { params: httpParams });
  }
}
