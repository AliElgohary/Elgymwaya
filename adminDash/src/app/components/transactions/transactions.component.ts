import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions/transactions.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  transactions: any = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionsService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  deleteTransaction(id: string) {
    this.transactionsService.deleteTransactions(id).subscribe((response) => {
      if (response.message === 'Transaction Deleted') {
        this.getTransactions();
      } else {
        console.error('Unexpected deletion response:', response);
      }
    });
  }
}
