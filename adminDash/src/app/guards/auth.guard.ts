import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  const router = inject(Router);
  if (authServ.isUserLogged()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
