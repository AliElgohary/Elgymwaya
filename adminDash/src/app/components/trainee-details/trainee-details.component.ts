import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { TraineesService } from '../../services/trainees/trainees.service';
import { Subscription } from 'rxjs';
import { Itrainee } from '../../models/Itrainee';
import { EditTraineeComponent } from './edit-trainee/edit-trainee.component';

@Component({
  selector: 'app-trainee-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EditTraineeComponent],
  templateUrl: './trainee-details.component.html',
  styleUrl: './trainee-details.component.scss',
})
export class TraineeDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private traineeServ: TraineesService,
    private router: Router
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

  navigateToEdit(id : string) {
    this.router.navigate([`trainees/details/${this.traineeID}/edit`]);
  }
}
