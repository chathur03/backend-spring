import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mfa',
  templateUrl: './mfa.component.html'
})
export class MfaComponent {
  otp = '';

  constructor(private auth: AuthService, private router: Router) {}

  verify() {
    this.auth.verifyMfa({ otp: this.otp }).subscribe(() => this.router.navigate(['/wallet']));
  }
}
