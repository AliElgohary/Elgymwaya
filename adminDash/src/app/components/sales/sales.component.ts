import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';
import { ISales } from '../../models/Isales';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { ITransaction } from '../../models/Itransactions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  sales!: ISales;
  transactions!: ITransaction[];
  constructor(
    private salesServ: SalesService,
    private transServ: TransactionsService
  ) {}
  ngOnInit(): void {
    this.getSales();
    this.getTransactions();
  }
  getSales() {
    this.salesServ.getSales().subscribe((data) => {
      this.sales = data;
    });
  }
  getTransactions() {
    this.transServ.getTransactions().subscribe((data) => {
      this.transactions = data;
      console.log(this.transactions);
    });
  }
}
