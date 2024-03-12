import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iplans } from '../models/iplans';


@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http:HttpClient) { }
  addPlan(planData: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/plan/add', planData);
  }
  getPlans(): Observable<any[]> {
    return this.http.get<Iplans>('http://localhost:5000/plans').pipe(
      map((response: any) => response.plans)
    )
  }
}
