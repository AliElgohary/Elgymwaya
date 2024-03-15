import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TraineesService {
  token = localStorage.getItem('userToken');
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: `${this.token}`,
    }),
  };

  addTrainee(traineeData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:5000/client/signup', traineeData, {
      headers: new HttpHeaders({
        token: `${this.token}`,
      }),
    });
  }

  getTrainees(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/client', this.httpOptions);
  }

  getTrainee(id: string): Observable<any> {
    console.log(id)
    return this.http
      .get<any>(`http://localhost:5000/client/${id}`)
  }

  editTrainee(data : any): Observable<any> {
    return this.http.put<any>('http://localhost:5000/client/update', data, {
      headers: new HttpHeaders({
        token: `${this.token}`,
      }),
    });
  }
}
