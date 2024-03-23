import { Component, OnInit } from '@angular/core';
import { TrainersService } from '../../services/trainers/trainers.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss',
})
export class TrainersComponent implements OnInit {
  trainers: any;
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(private trainersSer: TrainersService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTrainers(this.currentPage);
  }

  fetchTrainers(page: number) {
    this.trainersSer.getTrainersPaginated(page).subscribe((data: any) => {
      this.trainers = data.coaches;
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage;
    });
  }

  onDetailsClick(id: string) {
    this.router.navigate(['trainers/details', id]);
  }

  deleteTrainer(id: string) {
    if (confirm("Are you sure you want to delete this trainer?")) {
      this.trainersSer.deleteTrainer(id).subscribe((response: any) => {
        if (response.message === 'Coach Deleted') {
          this.fetchTrainers(this.currentPage);
        } else {
          console.error('Unexpected deletion response:', response);
        }
      });
    }
  }

  changePage(newPage: number) {
    this.fetchTrainers(newPage);
  }

  generatePages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
