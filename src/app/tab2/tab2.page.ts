import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss','tab2.page.css']
})
export class Tab2Page {

  constructor() {}
  services=[
    {headerTitle:"البوابة الرئيسية",img:'../../assets/globe.svg',url:"https://sgs.gov.sa/"},
    {headerTitle:"البوابة الداخلية",img:'../../assets/globe.svg',url:"http://gate.sgs.org.sa/"},
    {headerTitle:"NGD",img:'../../assets/database.svg',url:"https://ngd.sgs.gov.sa/"},
    {headerTitle:"رواسي",img:'../../assets/earthquake.svg',url:"https://apps.sgs.gov.sa/AppEngine/?appId=1e6e0e78-56b6-4e33-b2c7-ee50afe5efb8&tenant=ngd"},
    {headerTitle:"نظام المجالس",img:'../../assets/meetingsIcon.svg',url:"https://majals.sgs.gov.sa/"},
    {headerTitle:"نظام عون",img:'../../assets/ownIcon.svg',url:"https://ownprd.sgs.gov.sa/"}
  ]

}
