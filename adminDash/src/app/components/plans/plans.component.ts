import { Component, NgModule, OnInit } from '@angular/core';
import { PlansService } from '../../services/plans/plans.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iplans } from '../../models/iplans';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent implements OnInit {
  plans: Iplans[] = [];

  constructor(private plansService: PlansService) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans() {
    this.plansService.getPlans().subscribe((data) => {
      this.plans = data;
      console.log(this.plans)
    });
  }
}
