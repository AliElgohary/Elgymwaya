import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISales } from '../../models/Isales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  token = localStorage.getItem('userToken');
  private salesUrl = 'http://localhost:5000/sales';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: `${this.token}`,
    }),
  };

  getSales(): Observable<ISales> {
    return this.http.get<any>(this.salesUrl, this.httpOptions).pipe(
      map(response => response.sales)
    );
  }
}
