import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth.service';
import { BookDataService } from 'src/app/book-data.service';


@Component({
  selector: 'app-my-bookshelf',
  templateUrl: './my-bookshelf.component.html',
  styleUrls: ['./my-bookshelf.component.css']
})
export class MyBookshelfComponent {

  data: any
  constructor(private authorize: AuthService, private api: BookDataService) { }

  ngOnInit() {
    this.data = this.authorize.viewMyBookshelf()
  }

  async enterTitle(item: any) {
    const { value: dialogue } = await Swal.fire({
      title: 'Input dialogue ',
      input: 'text',
      inputLabel: 'Your dialogue title',
      inputPlaceholder: 'Enter your dialogue name'
    })

    if (dialogue) {
      this.startDialogue(item, dialogue)
    }

  }

  startDialogue(item: any, dtitle: any) {
    const currentdate = new Date();
    const datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();

    const details = {
      uid:this.authorize.userId,
      dialogueTitle: dtitle,
      book: item.title,
      author: item.author,
      img: item.img,
      creator: this.authorize.username,
      time: datetime
    }
    this.authorize.addDialogue(details)

  }

  deleteBook(id: any) {
    this.authorize.deleteMyBookshelf(id)
  }

  gotoBuy(buy: any) {
    window.open(buy, '_blank');
  }
}
