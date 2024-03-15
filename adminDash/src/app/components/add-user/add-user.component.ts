import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TraineesService } from '../../services/trainees/trainees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  user : any ={
    full_name: '',
    email: '',
    phone_number: '',
    birth_date: '',
    age: 0,
    height: 0,
    weight: 0,
    plan_id: '',
    subscription_date: '',
    subscription_end_date: '',
    subscription_months: 0,
    newPlanProfilePicture: null,
  }

  constructor(private traineeService: TraineesService, private router:Router) {}

  addTrainee() {
    const formData = new FormData();
    formData.append('full_name', this.user.full_name);
    formData.append('email', this.user.email); 
    formData.append('password', this.user.password);
    formData.append('Cpassword', this.user.Cpassword); 
    formData.append('phone_number', this.user.phone_number);
    formData.append('birth_date', this.user.birth_date);
    formData.append('height', this.user.height);
    formData.append('weight', this.user.weight);
    if (this.user.newPlanProfilePicture) {
      formData.append(
        'profile_picture',
        this.user.newPlanProfilePicture,
        this.user.newPlanProfilePicture.name
      );
    }

    this.traineeService.addTrainee(formData).subscribe(
      (data) => {
        console.log('User added successfully:', data);
        this.resetPlanForm();
        this.router.navigate(['/trainees'])
      },
      (error) => {
        console.error('Error adding User:', error);
      }
    );
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length) {
      this.user.newPlanProfilePicture = target.files[0];
    }
  }

  resetPlanForm() {
    this.user = {
      full_name: '',
      email: '',
      password: '',
      Cpassword: '',
      phone_number: '',
      birth_date: '',
      height: 0,
      weight: 0,
      newPlanProfilePicture: null,
    };
  }



}
