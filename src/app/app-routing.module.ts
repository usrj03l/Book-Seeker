import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './pages/book-info/book-info.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DialogueInfoComponent } from './pages/dialogue-info/dialogue-info.component';
import { DialoguesComponent } from './pages/dialogues/dialogues.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MyBookshelfComponent } from './pages/my-bookshelf/my-bookshelf.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthguardGuard } from './shared/authguard.guard';


const routes: Routes = [
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "book-info", component: BookInfoComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "Home", component: HomePageComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "search", component: SearchComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/1", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/2", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/3", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/4", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/5", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/6", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/7", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/8", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/9", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/10", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/11", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/12", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "book-list/13", component: BookListComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "contact-us", component: ContactUsComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "my-bookshelf", component: MyBookshelfComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "dialogues", component: DialoguesComponent, canActivate: [AuthguardGuard]
  },
  {
    path: "dialogue-info", component: DialogueInfoComponent, canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
