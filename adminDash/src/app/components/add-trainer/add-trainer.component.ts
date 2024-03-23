import { Component } from '@angular/core';
import { Itrainers } from '../../models/itrainers';
import { TrainersService } from '../../services/trainers/trainers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trainer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-trainer.component.html',
  styleUrl: './add-trainer.component.scss'
})
export class AddTrainerComponent {
  trainer : any ={
    full_name: '',
    email: '',
    password: '',
    Cpassword: '',
    phone_number: '',
    birth_date:'' ,
    age: 0,
    salary: 0,
    newPlanProfilePicture: null,
  }

  constructor(private trainerService: TrainersService, private router:Router) {}

  addTrainer() {
    const formData = new FormData();

    formData.append('full_name', this.trainer.full_name);
    formData.append('email', this.trainer.email);
    formData.append('password', this.trainer.password);
    formData.append('Cpassword', this.trainer.Cpassword);
    formData.append('phone_number', this.trainer.phone_number);
    formData.append('birth_date', this.trainer.birth_date.split('T')[0]);
    // formData.append('age', this.trainer.age);
    formData.append('salary', this.trainer.salary);
    if (this.trainer.newPlanProfilePicture) {
      formData.append(
        'profile_picture',
        this.trainer.newPlanProfilePicture,
        this.trainer.newPlanProfilePicture.name
      );
    }
    if (this.trainer.password !== this.trainer.Cpassword) {
      alert('Passwords do not match');
      return; }

    this.trainerService.addTrainer(formData).subscribe(

      (data) => {
        console.log('Trainer added successfully:', data);
        this.resetPlanForm();
        this.router.navigate(['/trainers'])
      },
      (error) => {
        console.error('Error adding Trainer:', error);
      }
    );
  }

  onFileSelected(event: Event) {
    
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length) {
      this.trainer.newPlanProfilePicture = target.files[0];
    }
  }

  resetPlanForm() {
    this.trainer = {
      full_name: '',
      email: '',
      password: '',
      Cpassword: '',
      phone_number: '',
      birth_date: '',
      // age: 0,
      salary: 0,
      newPlanProfilePicture: null,
    };
  }

}
