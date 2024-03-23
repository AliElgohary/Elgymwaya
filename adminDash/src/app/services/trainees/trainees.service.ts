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

  getTraineesPaginated(page : number): Observable<any> {
    return this.http.get<any>(`http://localhost:5000/client?page=${page}`, this.httpOptions);
  }

  getTrainee(id: string): Observable<any> {
    console.log(id)
    return this.http
      .get<any>(`http://localhost:5000/client/${id}`)
  }





  editTrainee(id : string,data : any): Observable<any> {
    console.log(data);
    console.log(id + "id");
    return this.http.put<any>(`http://localhost:5000/client/update/${id}`, data, {
      headers: new HttpHeaders({
        token: `${this.token}`,
      }),
    });
  }
  deleteTrainee(id: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/client/${id}`, {
      headers: new HttpHeaders({
        token: `${this.token}`,
      }),
    });
  }
}
