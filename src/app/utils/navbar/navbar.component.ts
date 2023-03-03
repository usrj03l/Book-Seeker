import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BookDataService } from 'src/app/book-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  data:any
  constructor(private router: Router, private api: BookDataService) {
  }

  @Input() load:any
  ngOnInit() {

  }
  getInfo(subject: any,id:string) {

    const myObs = new Observable((observer) => {
      observer.next(subject)
      observer.complete();
    })
    
    this.api.setObs(myObs)
    this.router.navigate(['/book-list/'+id])
  }

}
