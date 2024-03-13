import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iplans } from '../models/iplans';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  token = localStorage.getItem('userToken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': `${this.token}`,
    }),
  };
  constructor(private http: HttpClient) {}
  addPlan(planData: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:5000/plan/add',
      planData,
      this.httpOptions
    );
  }
  getPlans(): Observable<any[]> {
    return this.http
      .get<Iplans>('http://localhost:5000/plans')
      .pipe(map((response: any) => response.plans));
  }
}
