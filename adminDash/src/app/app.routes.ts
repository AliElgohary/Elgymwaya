import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainersComponent } from './components/trainers/trainers.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'trainers', component:TrainersComponent}
];
