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

  enterTitle(item: any) {
    let key;
    Swal.fire({
      title: "Sweet Alert Text Box",
      text: "Write something interesting:",
      input: 'text',
      inputValue: key,
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        this.startDialogue(item, result.value)
      }
    });

  }

  startDialogue(item: any, dtitle: any) {
    const details = {
      dialogueTitle: dtitle,
      book: item.title,
      author: item.author,
      img: item.img
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
