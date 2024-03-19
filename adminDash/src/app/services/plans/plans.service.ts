import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iplans } from '../../models/iplans';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  token = localStorage.getItem('userToken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: `${this.token}`,
    }),
  };
  constructor(private http: HttpClient) {}
  addPlan(planData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:5000/plan/add', planData, {
      headers: new HttpHeaders({
        token: `${this.token}`,
      }),
    });
  }
  getPlans(): Observable<any[]> {
    return this.http
      .get<Iplans>('http://localhost:5000/plans')
      .pipe(map((response: any) => response.plans));
  }
  getPlan(id: string): Observable<Iplans> {
    return this.http
      .get<Iplans>(`http://localhost:5000/plan/${id}`)
      .pipe(map((response: any) => response.plan));
  }

  deletePlans(id: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/plan/${id}`, {
      headers: new HttpHeaders({
        token: `${this.token}`,
      }),
    });
  }
}
