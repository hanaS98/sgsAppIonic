import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['goals.page.scss','goals.page.css'],
})
export class GoalsPage {

  constructor() { }
  back(){
    history.back()
  }


}
