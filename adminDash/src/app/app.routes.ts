import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { TraineesComponent } from './components/trainees/trainees.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'trainers', component:TrainersComponent},
  {path: 'trainees', component:TraineesComponent},
  {path: '**', component:NotFoundComponent},
];
