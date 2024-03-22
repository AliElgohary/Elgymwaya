import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';
import { ISales } from '../../models/Isales';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  sales!: ISales;
  constructor(private salesServ: SalesService) {}
  ngOnInit(): void {
    this.getSales();
  }
  getSales() {
    this.salesServ.getSales().subscribe((data) => {
      this.sales = data;
      console.log(this.sales);
    });
  }
}
