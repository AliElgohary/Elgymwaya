import { Component, NgModule, OnInit } from '@angular/core';
import { PlansService } from '../../services/plans.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent implements OnInit {
  plans: any = {
    newPlanName: '',
    newPlanDescription: '',
    newPlanFee: 0,
    newPlanProfilePicture: null,
  };

  constructor(private plansService: PlansService) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans() {
    this.plansService.getPlans().subscribe((data) => {
      this.plans = data;
    });
  }

  addPlan() {
    this.plansService.addPlan(this.plans).subscribe(
      (data) => {
        console.log('Plan added successfully:', data);
        this.plans = {
          newPlanName: '',
          newPlanDescription: '',
          newPlanFee: 0,
          newPlanProfilePicture:
            'https://res.cloudinary.com/dlljqtquk/image/upload/v1709051275/ElGymaweya/profile_picture-1709051385598.png',
        };
        this.loadPlans();
      },
      (error) => {
        console.error('Error adding plan:', error);
      }
    );
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      const file: File = target.files[0];
      this.plans.newPlanProfilePicture = file;
    }
  }
}
