import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/client/signin';
  user: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<boolean>(this.isUserLogged());
  }

  isUserLogged(): boolean {
    return !!localStorage.getItem('userToken');
  }

  login(user : any): Observable<any> {
    return this.http.post(this.apiUrl, user).pipe(
      tap((response: any) => {
        if (response && response.token && response.role === 'manager') {
          localStorage.setItem('userToken', response.token);
          this.user.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('userToken');
    this.user.next(false);
  }
}
