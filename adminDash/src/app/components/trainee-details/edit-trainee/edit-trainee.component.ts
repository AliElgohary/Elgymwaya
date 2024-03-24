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
    const traineeData = {
      full_name: this.trainee.full_name,
      email: this.trainee.email,
      phone_number: this.trainee.phone_number,
      height: this.trainee.height.toString(),
      weight: this.trainee.weight.toString()
    };

    this.traineeServ.editTrainee(this.traineeId, traineeData).subscribe(
      (data) => {
        console.log('Trainee edited successfully:', data);
        this.router.navigate(['/trainees']);
      },
      (error) => {
        console.error('Error editing trainee:', error);
      }
    );
  }


}
