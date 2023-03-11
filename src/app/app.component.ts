import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // user: boolean = false

  constructor(public auth: AngularFireAuth) { }
  ngOnInit() {

  }
}
