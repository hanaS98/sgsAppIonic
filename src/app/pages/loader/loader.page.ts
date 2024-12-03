import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss','./loader.page.css'],
})
export class LoaderPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('tabs/tab1')
    },4000)
   }

  ngOnInit() {
    console.log('hi')
  }

}
