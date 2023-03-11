import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ''
  password: string = ''
  constructor(private router: Router, private authorize: AuthService) { }

  ngOnInit(){

  }
  login() {

    const creds = {
      email: this.email,
      password: this.password
    }

    this.authorize.signIn(creds)
    this.email = ''
    this.password = ''
  }

  gotoSign() {
    this.router.navigate(['signup'])
  }
}
