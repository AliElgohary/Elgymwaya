import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITransaction } from '../models/Itransactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http:HttpClient) { }

  getTransactions(): Observable<any[]> {
    return this.http.get<ITransaction>('http://localhost:5000/transaction').pipe(
      map((response: any) => response.trans)
    )
  }

}
