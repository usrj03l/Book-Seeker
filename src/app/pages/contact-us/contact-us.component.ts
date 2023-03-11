import { Component } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = ''
  email: string = ''
  desc: string = ''

  constructor(private firestore: Firestore, private authorize: AuthService) { }

  send() {
    const contact = {
      name: this.name,
      email: this.email,
      desc: this.desc
    }
    const docRef = collection(this.firestore, "contactUs")
    this.authorize.insertData(docRef, contact)

    this.name = ''
    this.email = ''
    this.desc = ''
  }

}
