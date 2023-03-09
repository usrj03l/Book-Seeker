import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authorize:AuthService){ }

  signup(formData:any){
    if(formData.password === formData.confirmPassword){
      this.authorize.signup(formData)
    }
    else{
      alert("Passwords do not match")
    }
    
  }
}
