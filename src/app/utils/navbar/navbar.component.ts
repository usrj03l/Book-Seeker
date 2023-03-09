import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { BookDataService } from 'src/app/book-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  data:any
  username:string=''
  constructor(private router: Router, private api: BookDataService, public authorize:AuthService) {
  }

  ngOnInit() {
    // this.authorize.getUser().then((data)=> this.username = data.name)
  }
  
  getInfo(subject: any,id:string) {

    const myObs = new Observable((observer) => {
      observer.next(subject)
      observer.complete();
    })
    
    this.api.setGenre(myObs)
    this.router.navigate(['/book-list/'+id])
  }

  logOut(){
    this.authorize.logOut()
  }

}
