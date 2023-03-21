import { Component } from '@angular/core';
import { BookDataService } from 'src/app/book-data.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent {

  constructor(private api: BookDataService, private authorize: AuthService, private http: HttpClient) { }

  isbn: any
  data: any
  rating: any
  star: any = '⭐'
  buy: any

  ngOnInit() {
    this.isbn = localStorage.getItem('isbn')
    this.api.googleIsbn(this.isbn).subscribe(response => {
      this.data = response

      if (this.data.items[0].volumeInfo.hasOwnProperty('averageRating')) {
        this.rating = this.data.items[0].volumeInfo.averageRating
        this.rating = Math.ceil(this.rating);
      }
      else {
        this.rating = 4
      }

      if (this.data.items[0].saleInfo.hasOwnProperty('buyLink')) {
        this.buy = this.data.items[0].saleInfo.buyLink
      } else {
        this.buy = "https://www.amazon.in/s?k=" + this.isbn
      }
    });

  }

  addToBookshelf(data: any) {
    const bookDetails = {
      title: data.volumeInfo.title,
      img: data.volumeInfo.imageLinks.thumbnail,
      author: data.volumeInfo.authors[0],
      isbn: this.isbn,
      buyLink: this.buy
    }

    this.authorize.addBook(bookDetails)

  }

}
