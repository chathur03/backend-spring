import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) },
  { path: 'mfa', loadChildren: () => import('./auth/mfa/mfa.module').then(m => m.MfaModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule), canActivate: [AuthGuard] },
  { path: 'bills', loadChildren: () => import('./bills/bills.module').then(m => m.BillsModule), canActivate: [AuthGuard] },
  { path: 'bank', loadChildren: () => import('./bank/bank.module').then(m => m.BankModule), canActivate: [AuthGuard] },
  { path: 'merchant', loadChildren: () => import('./merchant/merchant.module').then(m => m.MerchantModule), canActivate: [AuthGuard] },
  { path: 'shop', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule), canActivate: [AuthGuard] },
  { path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule), canActivate: [AuthGuard] },
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
