import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private router: Router) {

  }
  @Input() data: any;
  @Input() head: String = '';

  gotoBookInfo(isbn: any) {
    localStorage.setItem('isbn', isbn);
    this.router.navigate(['/book-info']);
  }
}
