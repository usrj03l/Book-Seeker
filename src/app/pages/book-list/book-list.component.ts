import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BookDataService } from 'src/app/book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  data: any
  loading:boolean=true
  obs!: Observable<any>

  constructor(private api: BookDataService, private router: Router) {
  }

  ngOnInit() {
    this.obs = this.api.getObs();
    this.obs.subscribe(data => this.api.googleSearch(data).subscribe(response => {
      this.data = response
      this.data ? this.loading=false : this.loading=true
    }))

  }

  gotoBookInfo(isbn: any) {
    localStorage.setItem('isbn', isbn)
    this.router.navigate(['/book-info'])
  }

}
