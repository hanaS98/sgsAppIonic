import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['message.page.scss'],
})
export class MessagePage {

  constructor() { }
  back(){
    history.back()
  }

}
