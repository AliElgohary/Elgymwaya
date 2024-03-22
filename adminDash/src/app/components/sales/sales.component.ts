import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';
import { ISales } from '../../models/Isales';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { ITransaction } from '../../models/Itransactions';
import { CommonModule } from '@angular/common';
import { Itrainers } from '../../models/itrainers';
import { TrainersService } from '../../services/trainers/trainers.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  sales!: ISales;
  transactions!: any[];
  trainers!: Itrainers[]
  constructor(
    private salesServ: SalesService,
    private transServ: TransactionsService,
    private trainserServ: TrainersService
  ) {}
  ngOnInit(): void {
    this.getSales();
    this.getTransactions();
    this.getTrainers()
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
  getTrainers(){
    this.trainserServ.getTrainers().subscribe((data) => {
      this.trainers = data.coaches;
    });
  }
}
