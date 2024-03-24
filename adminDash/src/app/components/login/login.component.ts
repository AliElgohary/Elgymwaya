import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  lodingError = false;
  user = {
    email: '',
    password: '',
  };
  constructor(private authServ: AuthService, private router: Router) {}
  login(user: any) {
    this.authServ.login(user).subscribe(
      (res) => {
        if (res.role !== 'admin' || res.role !== 'owner') {
          this.lodingError = true;
        }
        this.router.navigate(['']);
      },
      (err) => {
        this.lodingError = true;
        console.log('login error' + err);
      }
    );
  }
}
