import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  data:any
  obs!:Observable<any>
  
  constructor(private http:HttpClient) {   }
  
  getTop(){
      return this.http.get("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=xPiPd4MTcmzIIRJgjBinSDNEsyXwlfiH")
  }

  googleBook(subject:String,orderBy:String=''){
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q="+subject+"&"+orderBy+"");
  }

  googleIsbn(path:any){
    return this.http.get(path)
  }

  googleSearch(key:any){
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q="+key+"&maxResults=40&orderBy=newest");
    
  }

  getAuthor(url:any){
    return this.http.post("http://localhost:3000/",{'url':url})
  }

  setObs(sub:Observable<any>):any{
      this.obs = sub
  }

  getObs(){
    return this.obs
  }
}

