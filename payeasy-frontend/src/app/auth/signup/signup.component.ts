import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  data: any = {};

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.data).subscribe(() => this.router.navigate(['/login']));
  }
}
