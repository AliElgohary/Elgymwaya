import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  transactions: any = [];
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.getTransactions(this.currentPage);
  }

  getTransactions(page: number) {
    this.transactionsService.getTranPaginnsated(page).subscribe((data:any) => {
      this.transactions = data.trans;
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage;
    });
  }

  deleteTransaction(id: string) {
    if (confirm("Are you sure you want to delete this transaction?")) {
      this.transactionsService.deleteTransactions(id).subscribe((response: any) => {
        if (response.message === 'Transaction Deleted') {
          this.getTransactions(this.currentPage);
        } else {
          console.error('Unexpected deletion response:', response);
        }
      });
    }
  }
  changePage(newPage: number) {
    this.getTransactions(newPage);
  }

  generatePages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}



