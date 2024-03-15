import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itrainee } from '../../../models/Itrainee';
import { TraineesService } from '../../../services/trainees/trainees.service';
import { FormsModule } from '@angular/forms';
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
  trainee!: any;
  constructor(
    private route: ActivatedRoute,
    private traineeServ: TraineesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.traineeId = this.route.parent?.snapshot.paramMap.get('id') || '';
    this.traineeServ.getTrainee(this.traineeId).subscribe((data) => {
      this.trainee = data;
      console.log(this.trainee);
    });
  }
  editTrainee() {
    const formData = new FormData();
    formData.append('full_name', this.trainee.full_name);
    formData.append('email', this.trainee.email);
    formData.append('phone_number', this.trainee.phone_number);
    formData.append('height', this.trainee.height);
    formData.append('weight', this.trainee.weight);
    if (this.trainee.newPlanProfilePicture) {
      formData.append(
        'profile_picture',
        this.trainee.newPlanProfilePicture,
        this.trainee.newPlanProfilePicture.name
      );
    }

    this.traineeServ.editTrainee(formData).subscribe(
      (data) => {
        console.log('trainee added successfully:', data);
        this.router.navigate(['/trainees']);
      },
      (error) => {
        console.error('Error adding trainee:', error);
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
