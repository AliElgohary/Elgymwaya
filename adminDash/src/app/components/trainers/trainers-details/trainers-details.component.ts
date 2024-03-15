import { Component, OnInit } from '@angular/core';
import { TrainersService } from '../../../services/trainers/trainers.service';
import { ActivatedRoute } from '@angular/router';
import { Itrainers } from '../../../models/itrainers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainers-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainers-details.component.html',
  styleUrl: './trainers-details.component.scss',
})
export class TrainersDetailsComponent implements OnInit {
  constructor(
    private trainerServ: TrainersService,
    private route: ActivatedRoute
  ) {}
  trainerId!: string;
  trainer!: Itrainers;

  ngOnInit(): void {
    this.trainerId = this.route.snapshot.paramMap.get('id') as string;
    this.loadTrainer()
  }
  loadTrainer(): void {
    this.trainerServ.getTrainer(this.trainerId).subscribe((data) => {
      this.trainer = data;
      console.log(this.trainer);
    });
  }
}
