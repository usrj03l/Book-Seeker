import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authorize:AuthService, private router:Router){ }

  ngOnInit(){
    if(this.authorize.isLoggedIn()){
      this.router.navigate(['Home'])
    }
  }

  signup(formData:any){
    if(formData.password === formData.confirmPassword){
      this.authorize.signup(formData)
    }
    else{
      alert("Passwords do not match")
    }
    
  }
}
