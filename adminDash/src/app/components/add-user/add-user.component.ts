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
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  user: any = {};

  constructor(
    private traineeService: TraineesService,
    private router: Router
  ) {}

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
    if (this.user.profilePicture) {
      formData.append(
        'profile_picture',
        this.user.profilePicture,
        this.user.profilePicture.name
      );
    }

    this.traineeService.addTrainee(formData).subscribe(
      (data) => {
        console.log('User added successfully:', data);
        this.resetForm();
        this.router.navigate(['/trainees']);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.user.profilePicture = file;
  }

  resetForm() {
    this.user = {
      full_name: '',
      email: '',
      password: '',
      Cpassword: '',
      phone_number: '',
      birth_date: '',
      height: 0,
      weight: 0,
      profilePicture: null,
    };
  }
}
