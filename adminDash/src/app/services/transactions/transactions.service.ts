import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITransaction } from '../../models/Itransactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}
  token = localStorage.getItem('userToken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: `${this.token}`,
    }),
  };

  getTransactions(): Observable<any[]> {
    return this.http
      .get<ITransaction>('http://localhost:5000/transaction')
      .pipe(map((response: any) => response.trans));
  }

  deleteTransactions(id: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/transaction/${id}`, {
      headers: new HttpHeaders({
        token: `${this.token}`,
      }),
    });
  }
}
