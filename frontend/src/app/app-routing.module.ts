import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/lobbies'
  },
  {
    path: 'lobbies',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./lobbies/lobbies.module').then(m => m.LobbiesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
