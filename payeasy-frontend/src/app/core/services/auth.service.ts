import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'payeasy_token';
  private roleKey = 'payeasy_role';

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/register`, data);
  }

  verifyMfa(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/mfa/verify`, data);
  }

  setSession(token: string, role: string) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.roleKey, role);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  isMerchant(): boolean {
    return localStorage.getItem(this.roleKey) === 'MERCHANT';
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
