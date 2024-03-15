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
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddPlanComponent } from './components/add-plan/add-plan.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { PlanDetailsComponent } from './components/plans/plan-details/plan-details.component';
import { TraineeDetailsComponent } from './components/trainees/trainee-details/trainee-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [authGuard],
  },
  { path: 'sales', component: SalesComponent, canActivate: [authGuard] },
  { path: 'trainers', component: TrainersComponent, canActivate: [authGuard] },
  {
    path: 'trainees',
    component: TraineesComponent,
    canActivate: [authGuard],
    children: [],
  },
  { path: 'trainees/details/:id', component: TraineeDetailsComponent },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'plans',
    component: PlansComponent,
    canActivate: [authGuard],
    children: [{ path: 'details/:id', component: PlanDetailsComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'adduser', component: AddUserComponent, canActivate: [authGuard] },
  { path: 'addplan', component: AddPlanComponent, canActivate: [authGuard] },
  {
    path: 'addtrainer',
    component: AddTrainerComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: NotFoundComponent },
];
