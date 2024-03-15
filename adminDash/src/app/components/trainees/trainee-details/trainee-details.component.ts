import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TraineesService } from '../../../services/trainees/trainees.service';
import { Subscription } from 'rxjs';
import { Itrainee } from '../../../models/Itrainee';

@Component({
  selector: 'app-trainee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainee-details.component.html',
  styleUrl: './trainee-details.component.scss',
})
export class TraineeDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private traineeServ: TraineesService
  ) {}
  traineeID!: string;
  trainee!: Itrainee;
  trainIDChangedSubscription!: Subscription;
  ngOnInit(): void {
    this.trainIDChangedSubscription = this.route.paramMap.subscribe(
      (params) => {
        this.traineeID = params.get('id') as string;
        this.loadTrainee();
      }
    );
  }

  loadTrainee(): void {
    this.traineeServ.getTrainee(this.traineeID).subscribe((data) => {
      this.trainee = data;
    });
  }
}
