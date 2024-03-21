import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itrainee } from '../../../models/Itrainee';
import { TraineesService } from '../../../services/trainees/trainees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-trainee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-trainee.component.html',
  styleUrl: './edit-trainee.component.scss',
})
export class EditTraineeComponent implements OnInit {
  traineeId!: string;
  trainee!: Itrainee;

  constructor(
    private route: ActivatedRoute,
    private traineeServ: TraineesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.traineeId = this.route.parent?.snapshot.paramMap.get('id') || '';
    this.traineeServ.getTrainee(this.traineeId).subscribe((data) => {
      this.trainee = data;
    });
  }

  editTrainee() {
    const formData = new FormData();

    formData.append('full_name', this.trainee.full_name);
    formData.append('email', this.trainee.email);
    formData.append('phone_number', this.trainee.phone_number);
    formData.append('height', this.trainee.height.toString());
    formData.append('weight', this.trainee.weight.toString());
    if (this.trainee.newPlanProfilePicture) {
      formData.append(
        'profile_picture',
        this.trainee.newPlanProfilePicture,
        this.trainee.newPlanProfilePicture.name
      );
    }

    this.traineeServ.editTrainee(this.traineeId, this.trainee).subscribe(
      (data) => {
        console.log('Trainee edited successfully:', data);
        this.router.navigate(['/trainees']);
      },
      (error) => {
        console.error('Error editing trainee:', error);
      }
    );
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length) {
      this.trainee.newPlanProfilePicture = target.files[0];
    }
  }
}
