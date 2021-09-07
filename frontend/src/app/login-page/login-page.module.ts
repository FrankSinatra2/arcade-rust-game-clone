import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MatCardModule
  ],
  exports: [
    LoginPageRoutingModule
  ]
})
export class LoginPageModule { }
