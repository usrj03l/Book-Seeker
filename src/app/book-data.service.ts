import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  data: any
  obs!: Observable<any>
  shelf: any

  constructor(private http: HttpClient) { }

  getTop() {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=xPiPd4MTcmzIIRJgjBinSDNEsyXwlfiH")
  }

  googleBook(subject: String, orderBy: String = '') {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + subject + "&" + orderBy + "");
  }

  googleIsbn(isbn: any) {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn)
  }

  googleSearch(key: any) {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + key + "&maxResults=40&orderBy=newest");

  }

  getAuthor(url: any) {
    return this.http.post("http://localhost:3000/", { 'url': url })
  }

  setGenre(sub: Observable<any>): any {
    this.obs = sub
  }

  getGenre() {
    return this.obs
  }

  setShelf(data: any) {
    this.shelf = data;
  }
  getShelf() {
    return this.shelf
  }

  sAlert(msg: string) {
    Swal.fire(
      '',
      msg,
      'success'
    )
  }

  fAlert(msg: string) {
    Swal.fire(
      'Sorry! Could not add the book',
      msg,
      'error'
    )
  }

}
