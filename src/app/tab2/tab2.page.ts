import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss','tab2.page.css']
})
export class Tab2Page implements OnInit {

  constructor() {}
  slectedLang= localStorage.getItem('lang');
  lang="EN";

  ngOnInit(){
    console.log(localStorage.getItem('lang'));
    if(this.slectedLang === 'en'){
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.setAttribute('lang','en');
      this.lang='ع';
      this.title = this.titleEN;
      this.services = this.servicesEN;

    }else{
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.setAttribute('lang','ar');
      this.lang="EN";
      this.title = this.titleAR;
      this.services = this.servicesAR;

    }
  }

  title="خدمات الهيئة";
  titleAR="خدمات الهيئة";
  titleEN="SGS Services";
  services=[
    {headerTitle:"البوابة الرئيسية",img:'assets/globe.svg',url:"https://sgs.gov.sa/"},
    {headerTitle:"البوابة الداخلية",img:'assets/globe.svg',url:"http://gate.sgs.org.sa/"},
    {headerTitle:"NGD",img:'assets/database.svg',url:"https://ngd.sgs.gov.sa/"},
    {headerTitle:"رواسي",img:'assets/earthquake.svg',url:"https://apps.sgs.gov.sa/AppEngine/?appId=1e6e0e78-56b6-4e33-b2c7-ee50afe5efb8&tenant=ngd"},
    {headerTitle:"نظام المجالس",img:'assets/meetingsIcon.svg',url:"https://majals.sgs.gov.sa/"},
    {headerTitle:"نظام عون",img:'assets/ownIcon.svg',url:"https://ownprd.sgs.gov.sa/"}
  ]
  servicesAR=[
    {headerTitle:"البوابة الرئيسية",img:'assets/globe.svg',url:"https://sgs.gov.sa/"},
    {headerTitle:"البوابة الداخلية",img:'assets/globe.svg',url:"http://gate.sgs.org.sa/"},
    {headerTitle:"NGD",img:'assets/database.svg',url:"https://ngd.sgs.gov.sa/"},
    {headerTitle:"رواسي",img:'assets/earthquake.svg',url:"https://apps.sgs.gov.sa/AppEngine/?appId=1e6e0e78-56b6-4e33-b2c7-ee50afe5efb8&tenant=ngd"},
    {headerTitle:"نظام المجالس",img:'assets/meetingsIcon.svg',url:"https://majals.sgs.gov.sa/"},
    {headerTitle:"نظام عون",img:'assets/ownIcon.svg',url:"https://ownprd.sgs.gov.sa/"}
  ]
  servicesEN=[
    {headerTitle:"Main Gate",img:'assets/globe.svg',url:"https://sgs.gov.sa/"},
    {headerTitle:"Inner Gate",img:'assets/globe.svg',url:"http://gate.sgs.org.sa/"},
    {headerTitle:"NGD",img:'assets/database.svg',url:"https://ngd.sgs.gov.sa/"},
    {headerTitle:"Rawasi",img:'assets/earthquake.svg',url:"https://apps.sgs.gov.sa/AppEngine/?appId=1e6e0e78-56b6-4e33-b2c7-ee50afe5efb8&tenant=ngd"},
    {headerTitle:"نظام المجالس",img:'assets/meetingsIcon.svg',url:"https://majals.sgs.gov.sa/"},
    {headerTitle:"OWN",img:'assets/ownIcon.svg',url:"https://ownprd.sgs.gov.sa/"}
  ]

  changeLang(){
    if(document.documentElement.lang === 'en'){
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.lang = "ar";
      this.lang = "EN";
      localStorage.setItem('lang',"ar");
      this.title = this.titleAR;
      this.services = this.servicesAR;
    }else{
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.lang = "en";
      this.lang = "ع";
      localStorage.setItem('lang',"en");
      this.title = this.titleEN;
      this.services = this.servicesEN;



    }

  }

}
