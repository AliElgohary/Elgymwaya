import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { TraineesComponent } from './components/trainees/trainees.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SalesComponent } from './components/sales/sales.component';
import { PlansComponent } from './components/plans/plans.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path: '', component:HomeComponent, canActivate: [authGuard]},
  {path: 'analytics', component:AnalyticsComponent, canActivate: [authGuard]},
  {path: 'sales', component:SalesComponent, canActivate: [authGuard]},
  {path: 'trainers', component:TrainersComponent, canActivate: [authGuard]},
  {path: 'trainees', component:TraineesComponent, canActivate: [authGuard]},
  {path: 'transactions', component:TransactionsComponent, canActivate: [authGuard]},
  {path: 'plans', component:PlansComponent, canActivate: [authGuard]},
  {path: 'login', component:LoginComponent},
  {path: '**', component:NotFoundComponent},
];
