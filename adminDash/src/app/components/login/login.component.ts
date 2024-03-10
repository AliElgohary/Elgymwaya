import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  constructor(private authServ: AuthService, private router:Router) {}
  login(user: any) {
    this.authServ.login(user).subscribe(
      (res) => {
        console.log('login susccess' + res);
        this.router.navigate(['']);
      },
      (err) => {
        console.log('login error' + err);
      }
    );
  }
}
