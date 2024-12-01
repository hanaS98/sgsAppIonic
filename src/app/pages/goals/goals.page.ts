import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['goals.page.scss','goals.page.css'],
})
export class GoalsPage implements OnInit{

  constructor() { }
  slectedLang= localStorage.getItem('lang');
  lang="EN";
  ngOnInit(){
    console.log(localStorage.getItem('lang'));
    if(this.slectedLang === 'en'){
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.setAttribute('lang','en');
      this.lang='ع',
      this.header = this.headerEN;
      this.home = this.homeEN;
      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-forward-outline')

    }else{
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.setAttribute('lang','ar');
      this.lang="EN";
      this.header = this.headerAR;
      this.home = this.homeAR;
      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-back-outline')
    }
  }
  header="أهداف الهيئة";
  home="الرئيسية";

  headerAR="أهداف الهيئة";
  homeAR="الرئيسية";

  headerEN="Objectives";
  homeEN="Home";

  changeLang(){
    if(document.documentElement.lang === 'en'){
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.lang = "ar";
      this.lang = "EN";
      localStorage.setItem('lang',"ar");
      this.header = this.headerAR;
      this.home = this.homeAR;

      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-back-outline')
    }else{
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.lang = "en";
      this.lang = "ع";
      localStorage.setItem('lang',"en");
      this.header = this.headerEN;
      this.home = this.homeEN;

      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-forward-outline')
    }

  }

  back(){
    history.back()
  }


}
