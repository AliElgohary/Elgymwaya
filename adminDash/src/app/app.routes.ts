import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { TraineesComponent } from './components/trainees/trainees.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SalesComponent } from './components/sales/sales.component';
import { PlansComponent } from './components/plans/plans.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'analytics', component:AnalyticsComponent},
  {path: 'sales', component:SalesComponent},
  {path: 'trainers', component:TrainersComponent},
  {path: 'trainees', component:TraineesComponent},
  {path: 'transactions', component:TransactionsComponent},
  {path: 'plans', component:PlansComponent},
  {path: '**', component:NotFoundComponent},
];
