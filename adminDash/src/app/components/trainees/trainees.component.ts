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
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(private traineesSer: TraineesService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTrainees(this.currentPage);
  }

  fetchTrainees(page: number) {
    this.traineesSer.getTraineesPaginated(page).subscribe((data: any) => {
      this.trainees = data.clients;
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage;
    });
  }

  onDetailsClick(traineeID: string) {
    this.router.navigate(['trainees/details', traineeID]);
  }

  deleteTrainees(id: string) {
    this.traineesSer.deleteTrainee(id).subscribe((response: any) => {
      if (response.message === 'user Deleted') {
        this.fetchTrainees(this.currentPage);
      } else {
        console.error('Unexpected deletion response:', response);
      }
    });
  }

  changePage(newPage: number) {
    this.fetchTrainees(newPage);
  }

  generatePages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }}
