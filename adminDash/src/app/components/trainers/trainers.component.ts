import { Component, OnInit } from '@angular/core';
import { TrainersService } from '../../services/trainers/trainers.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss',
})
export class TrainersComponent implements OnInit {
  trainers: any;
  constructor(private trainersSer: TrainersService, private router: Router) {}
  ngOnInit(): void {
    this.trainersSer.getTrainers().subscribe((data) => {
      this.trainers = data.coaches;
      console.log(this.trainers);
    });
  }
  onDetailsClick(id: string) {
    this.router.navigate(['trainers/details', id]);
  }
}
