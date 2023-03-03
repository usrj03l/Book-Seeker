import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-card',
  templateUrl: './google-card.component.html',
  styleUrls: ['./google-card.component.css']
})
export class GoogleCardComponent {

  constructor(private router:Router){ }

  @Input() data:any
  @Input() head:String='';

  gotoBookInfo(isbn:any){
    localStorage.setItem('isbn',isbn)
    this.router.navigate(['/book-info'])
  }
}
