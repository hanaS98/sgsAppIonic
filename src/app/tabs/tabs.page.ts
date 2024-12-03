import { Component,DoCheck } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss','tabs.page.css']
})
export class TabsPage implements DoCheck{

  constructor() {}
  ngDoCheck(){
    if(document.documentElement.lang === 'en'){
      this.title1 = this.title1EN;
      this.title2 = this.title2EN;
    }else{
      this.title1 = this.title1AR;
      this.title2 = this.title2AR;
    }
  }

  title1 = "الرئيسية";
  title2 = "الخدمات";

  title1AR = "الرئيسية";
  title2AR = "الخدمات";

  title1EN = "Home";
  title2EN = "Services";
}
