import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.page.html',
  styleUrls: ['./vision.page.scss','vision.page.css'],
})
export class VisionPage {

  constructor() { }

  back(){
    history.back()
  }

}
