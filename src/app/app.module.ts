import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './safe-pipe.pipe';
import { BookListComponent } from './pages/book-list/book-list.component';
import { CardComponent } from './utils/card/card.component';
import { GoogleCardComponent } from './utils/google-card/google-card.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';
import { SearchComponent } from './pages/search/search.component'; 
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoadingComponent } from './pages/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SafePipePipe,
    BookListComponent,
    CardComponent,
    GoogleCardComponent,
    BookInfoComponent,
    SearchComponent,
    ContactUsComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
