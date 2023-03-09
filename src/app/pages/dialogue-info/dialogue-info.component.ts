import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dialogue-info',
  templateUrl: './dialogue-info.component.html',
  styleUrls: ['./dialogue-info.component.css']
})
export class DialogueInfoComponent {

  data: any
  dialId:any
  msgData:any
  message:string = ''
  constructor(private authorize: AuthService) { }

  ngOnInit() {
    this.dialId = localStorage.getItem('dialId')
    this.authorize.viewDialInfo(this.dialId).then((data) => this.data = data)
    this.msgData = this.authorize.viewMessages(this.dialId)
  }

  enterMsg(){
    const msg = {
      message:this.message,
      username:this.authorize.username
    }
    this.authorize.addDialInfo(this.dialId,msg)
    this.message=''
  }
}
