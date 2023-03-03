import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './pages/book-info/book-info.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "book-info", component: BookInfoComponent
  },
  {
    path: "Home", component: HomePageComponent
  },
  {
    path: "search", component: SearchComponent
  },
  {
    path:"book-list/1", component:BookListComponent 
  },
  {
    path:"book-list/2", component:BookListComponent 
  },
  {
    path:"book-list/3", component:BookListComponent 
  },
  {
    path:"book-list/4", component:BookListComponent 
  },
  {
    path:"book-list/5", component:BookListComponent 
  },
  {
    path:"book-list/6", component:BookListComponent 
  },
  {
    path:"book-list/7", component:BookListComponent 
  },
  {
    path:"book-list/8", component:BookListComponent 
  },
  {
    path:"book-list/9", component:BookListComponent 
  },
  {
    path:"book-list/10", component:BookListComponent 
  },
  {
    path:"book-list/11", component:BookListComponent 
  },
  {
    path:"book-list/12", component:BookListComponent 
  },
  {
    path:"book-list/13", component:BookListComponent 
  },
  {
    path:"contact-us", component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
