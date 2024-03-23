import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlansService } from '../../../services/plans/plans.service';
import { Iplans } from '../../../models/iplans';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-details.component.html',
  styleUrl: './plan-details.component.scss',
})
export class PlanDetailsComponent implements OnInit {
  planID!: string;
  plan!: Iplans;
  planIDChangedSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private planServ: PlansService) {}
  ngOnInit(): void {
    this.planIDChangedSubscription = this.route.paramMap.subscribe((params) => {
      this.planID = params.get('id') as string;
      this.loadPlan();
    });
  }

  loadPlan(): any {
    this.planServ.getPlan(this.planID).subscribe((data) => {
      this.plan = data;
    });
  }

  ngOnDestroy(): void {
    if (this.planIDChangedSubscription) {
      this.planIDChangedSubscription.unsubscribe();
    }
  }
}
