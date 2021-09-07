import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { first, tap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.loggedIn$
      .pipe(
        first(),
        tap((loggedIn) => {
          if (!loggedIn) {
            this.router.navigate(['/login'])
          }
        })
      );
  }
}
