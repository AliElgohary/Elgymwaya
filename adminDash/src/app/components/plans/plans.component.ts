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
    const formData = new FormData();
    formData.append('title', this.plans.newPlanName);
    formData.append('description', this.plans.newPlanDescription);
    formData.append('fee', this.plans.newPlanFee.toString());
    if (this.plans.newPlanProfilePicture) {
      formData.append(
        'profile_picture',
        this.plans.newPlanProfilePicture,
        this.plans.newPlanProfilePicture.name
      );
    }

    this.plansService.addPlan(formData).subscribe(
      (data) => {
        console.log('Plan added successfully:', data);
        this.resetPlanForm();
        this.loadPlans();
      },
      (error) => {
        console.error('Error adding plan:', error);
      }
    );
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length) {
      this.plans.newPlanProfilePicture = target.files[0];
    }
  }

  resetPlanForm() {
    this.plans = {
      newPlanName: '',
      newPlanDescription: '',
      newPlanFee: 0,
      newPlanProfilePicture: null,
    };
  }
}
