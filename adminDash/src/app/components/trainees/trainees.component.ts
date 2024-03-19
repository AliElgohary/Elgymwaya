import { Component, OnInit } from '@angular/core';
import { TraineesService } from '../../services/trainees/trainees.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainees.component.html',
  styleUrl: './trainees.component.scss',
})
export class TraineesComponent implements OnInit {
  trainees: any;
  constructor(private traineesSer: TraineesService, private router: Router) {}
  ngOnInit(): void {
    this.traineesSer.getTrainees().subscribe((data) => {
      this.trainees = data;
      console.log(this.trainees);
    });
  }
  onDetailsClick(traineeID: string) {
    this.router.navigate(['trainees/details', traineeID]);
  }

  deleteTrainees(id: string) {
    this.traineesSer.deleteTrainee(id).subscribe((response) => {
      if (response.message === 'user Deleted') {
        this.traineesSer.getTrainees().subscribe((data) => {
          this.trainees = data;
        });
    } else {
        console.error('Unexpected deletion response:', response);
      }
    });
  }
}
