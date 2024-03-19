import { Component, OnInit } from '@angular/core';
import { TrainersService } from '../../services/trainers/trainers.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Itrainers } from '../../models/itrainers';
import { CommonModule } from '@angular/common';
import { EditTrainerComponent } from './edit-trainer/edit-trainer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trainers-details',
  standalone: true,
  imports: [CommonModule , RouterOutlet, EditTrainerComponent],
  templateUrl: './trainers-details.component.html',
  styleUrl: './trainers-details.component.scss',
})
export class TrainersDetailsComponent implements OnInit {
  constructor(
    private trainerServ: TrainersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  trainerId!: string;
  trainer!: Itrainers;
  trainIDChangedSubscription!: Subscription;

  // ngOnInit(): void {
  //   this.trainerId = this.route.snapshot.paramMap.get('id') as string;
  //   this.loadTrainer()
  // }

  ngOnInit(): void {
    this.trainIDChangedSubscription = this.route.paramMap.subscribe(
      (params) => {
        this.trainerId = params.get('id') as string;
        this.loadTrainer();
      }
    );
  }
  loadTrainer(): void {
    this.trainerServ.getTrainer(this.trainerId).subscribe((data) => {
      this.trainer = data;
      console.log(this.trainer);
    });
  }
  navigateToEdit(id : string) {
  // console.log(  this.router.navigate([`trainers/details/${this.trainerId}/edit`]) );
   this.router.navigate([`trainers/details/${this.trainerId}/edit`]) ;

  }
}
