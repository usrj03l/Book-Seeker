import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dialogues',
  templateUrl: './dialogues.component.html',
  styleUrls: ['./dialogues.component.css']
})
export class DialoguesComponent {

  data: any

  constructor(public authorize: AuthService, private router:Router) { }

  ngOnInit() {
    this.data = this.authorize.viewDialogues()
  }


  del(id: any) {
    this.authorize.deleteDialogue(id)
  }

  gotoInfo(id: any) {
    localStorage.setItem('dialId',id)
    this.router.navigate(['dialogue-info'])
  }
}
