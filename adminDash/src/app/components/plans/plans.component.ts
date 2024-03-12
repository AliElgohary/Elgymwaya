import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../services/plans.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent implements OnInit{
  Plans: any = {
  newPlanName:'',
  newPlanDescription: '',
  newPlanFee: 0,
  newPlanProfilePicture: null
  }
  constructor(private authServ: AuthService, private plansService: PlansService) {}
  ngOnInit(): void {
    this.plansService.getPlans().subscribe((data) => {
      this.Plans = data;
      console.log(this.Plans);
  });
  }
  addPlan() {
    const formData = new FormData();
    formData.append('title', this.Plans.newPlanName);
    formData.append('description', this.Plans.newPlanDescription);
    formData.append('fee', this.Plans.newPlanFee.toString());
    if (this.Plans.newPlanProfilePicture) {
      formData.append('profile_picture', this.Plans.newPlanProfilePicture);
    }
    // if (this.authServ.isUserLogged()) {
    this.plansService.addPlan(formData).subscribe((data) => {
      console.log('New plan:', data);
      this.Plans.newPlanName = '';
      this.Plans.newPlanDescription = '';
      this.Plans.newPlanFee = 0;
      this.Plans.newPlanProfilePicture = null;
    }, (error) => {
      console.error('Error adding new plan:', error);
    });
    
  }

  onProfilePictureChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.Plans.newPlanProfilePicture = fileList[0];
    }
  }
}
