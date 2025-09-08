import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup.component';

const routes: Routes = [{ path: '', component: SignupComponent }];

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class SignupModule {}
