import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {debounceTime, distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { BookDataService } from 'src/app/book-data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

data:any
searchText:string=''
books:any
field:string=''

searchObs = new Subject();

constructor(private api:BookDataService ,private router:Router){

}

ngOnInit(){

  this.searchObs.pipe(
    debounceTime(1000),distinctUntilChanged()
  ).subscribe(data=> this.searchItem()) 
  }

  searchItem(){
    this.api.googleSearch(this.field + this.searchText).pipe(takeUntil(this.searchObs)).subscribe(response => {
      this.data=response;
    })
  }

  radio(value:any){
    this.field=value
  }

  gotoBookInfo(isbn:any){
    localStorage.setItem('isbn', isbn);
    this.router.navigate(['/book-info']);
  }

  ngOnDestroy(){
    this.searchObs.complete()
  }

}




