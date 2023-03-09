import { Component } from '@angular/core';
import { BookDataService } from 'src/app/book-data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private api: BookDataService) {

  }

  loading:boolean=true
  data: any

  topPicks:any
  topPicksHead:String="Top Picks"

  bestSellerHead:String="Best Seller"
  bestSeller:any

  crime:any
  crimeHead:any="Crime"

  fantasy:any
  fantasyHead:any="Fantasy"

  romance:any
  romanceHead:any="Romance"

  count:number = 0

  ngOnInit() {
    this.api.getTop().subscribe(response => {
      this.data = response;
      this.topPicks=this.data.results.lists[1]
      this.bestSeller=this.data.results.lists[0]
      this.bestSeller ? this.count=this.count+1 : this.count
      this.topPicks ? this.count=this.count+1 : this.count
    });

    this.api.googleBook("subject:fiction/"+this.crimeHead).subscribe(response =>{
      this.data=response;
      this.crime=this.data.items
      this.crime ? this.count=this.count+1 : this.count
      
    });

    this.api.googleBook("subject:fiction/"+this.romanceHead,"orderBy=newest").subscribe(response =>{
      this.data=response;
      this.romance=this.data.items
      this.romance ? this.count=this.count+1 : this.count
      
    });

    this.api.googleBook("subject:fiction/fantasy").subscribe(response =>{
      this.data=response;
      this.fantasy=this.data.items
      this.fantasy ? this.count=this.count+1 : this.count
    });
    
  }

}
