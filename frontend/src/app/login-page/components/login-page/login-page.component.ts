import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }


  onSignIn() {

  }

  onCreateAccount() {
    
  }

}
