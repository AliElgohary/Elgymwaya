import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private token = localStorage.getItem('userToken');

  constructor(private http: HttpClient) {}

  getAnalytics(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: `${this.token}`,
      }),
    };

    return this.http.get('http://localhost:5000/analytics', httpOptions);
  }
  getAnalyticsCounts(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: `${this.token}`,
      }),
    };

    return this.http.get('http://localhost:5000/analytics/count', httpOptions);
  }
  getTopThreeCoaches(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: `${this.token}`,
      }),
    };

    return this.http.get(
      'http://localhost:5000/analytics/coaches',
      httpOptions
    );
  }
}
