import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { TrainersService } from '../../../services/trainers/trainers.service';
import { Itrainers } from '../../../models/itrainers';

@Component({
  selector: 'app-edit-trainer',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './edit-trainer.component.html',
  styleUrl: './edit-trainer.component.scss'
})
export class EditTrainerComponent implements OnInit{

  trainerId!: string;
   //trainer!: any;
   trainer:Itrainers = {} as Itrainers;
  constructor(
    private route: ActivatedRoute,
    private trainerServ: TrainersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.trainerId = this.route.parent?.snapshot.paramMap.get('id') || '';
    this.trainerServ.getTrainer(this.trainerId).subscribe((data) => {
      this.trainer = data;
      console.log(this.trainer);
    });
  }
  editTrainer() {
    const formData = new FormData();
    formData.append('full_name', this.trainer.full_name.toString());
    formData.append('email', this.trainer.email.toString());
    formData.append('phone_number', this.trainer.phone_number.toString());
    // formData.append('birth_date', this.trainer.birth_date);
    if (this.trainer.birth_date instanceof Date) {
      formData.append('birth_date', this.trainer.birth_date.toISOString().split('T')[0]);
    }
    formData.append('age', this.trainer.age.toString());
    formData.append('salary', this.trainer.salary.toString());
    if (this.trainer.newPlanProfilePicture) {
      formData.append(
        'profile_picture',
        this.trainer.newPlanProfilePicture,
        this.trainer.newPlanProfilePicture.name
      );
    }

    this.trainerServ.editTrainer(this.trainerId, this.trainer).subscribe(
      (data) => {
        console.log('Trainer edited successfully:', data);
        this.router.navigate(['/trainers']);
      },
      (error) => {
        console.error('Error editing trainer:', error);
      }
    );
  }
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length) {
      this.trainer.newPlanProfilePicture = target.files[0];
    }
  }

}
