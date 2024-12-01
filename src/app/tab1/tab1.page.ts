import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss','tab1.page.css']
})
export class Tab1Page {

  constructor() {}
  lang="EN";
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  slectedLang = localStorage.getItem('lang');
  ngOnInit(){
    console.log(this.slectedLang);
    if(document.documentElement.lang === 'en'){
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.setAttribute('lang','en');
      this.lang='ع',
      this.pageHeader = this.pageHeaderEN;
      this.description = this.descriptionEN;
      this.information = this.informationEN;


    }else{
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.setAttribute('lang','ar');
      this.lang="EN";
      this.pageHeader = this.pageHeaderAR;
      this.description = this.descriptionAR;
      this.information = this.informationAR;

    }
  }

  ngDoCheck(){
    if(document.documentElement.lang === 'en'){
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.setAttribute('lang','en');
      this.lang='ع',
      this.pageHeader = this.pageHeaderEN;
      this.description = this.descriptionEN;
      this.information = this.informationEN;


    }else{
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.setAttribute('lang','ar');
      this.lang="EN";
      this.pageHeader = this.pageHeaderAR;
      this.description = this.descriptionAR;
      this.information = this.informationAR;

    }
  }

  pageHeader="عن الهيئة";
  description="أنشئت هيئة المساحة الجيولوجية السعودية في عام 1420ه‍ 1999م، بقرار رقم 115 والصادر عن مجلس الوزراء الموقر. وترتبط هيئة المساحة الجيولوجية السعودية إرتباطاً مباشراً بوزارة الصناعة والثروة المعدنية. ولها شخصية اعتبارية وتتمتع بالأهلية الكاملة لتحقيق التنظيم الخاص به";
  information=[
    {headerTitle:"رؤية الهيئة",img:'assets/sgsVision.png',url:'/vision/'},
    {headerTitle:"رسالة الهيئة",img:'assets/sgsMessage.svg',url:'/message/'},
    {headerTitle:"أهداف الهيئة",img:'assets/sgsGoal.png',url:'/goals/'},
  ]

  pageHeaderAR="عن الهيئة";
  descriptionAR="أنشئت هيئة المساحة الجيولوجية السعودية في عام 1420ه‍ 1999م، بقرار رقم 115 والصادر عن مجلس الوزراء الموقر. وترتبط هيئة المساحة الجيولوجية السعودية إرتباطاً مباشراً بوزارة الصناعة والثروة المعدنية. ولها شخصية اعتبارية وتتمتع بالأهلية الكاملة لتحقيق التنظيم الخاص به";
  informationAR=[
    {headerTitle:"رؤية الهيئة",img:'assets/sgsVision.png',url:'/vision/'},
    {headerTitle:"رسالة الهيئة",img:'assets/sgsMessage.svg',url:'/message/'},
    {headerTitle:"أهداف الهيئة",img:'assets/sgsGoal.png',url:'/goals/'},
  ]

  pageHeaderEN="About SGS";
  descriptionEN="The Saudi Geological Survey (SGS) is responsible for all specialized earth science works in the Kingdom of Saudi Arabia, from the basic works on geologic mapping to the conduct of applied geoscientific studies, especially on mineral and groundwater explorations and the development of mineral resources, including the provisions of investment opportunities in the field of mining. According to the SGS Statute, the SGS administers the priority programs of the government that are focused on hydrogeological, environmental, and engineering geology studies and the monitoring of geologic hazards, seismic and volcanic activities. The SGS serves as the main source of scientific information in Saudi Arabia in the form of technical reports, geologic maps, mineral resources, and other relevant geologic data about the Kingdom.";
  informationEN=[
    {headerTitle:"Vision",img:'assets/sgsVision.png',url:'/vision/'},
    {headerTitle:"Mission",img:'assets/sgsMessage.svg',url:'/message/'},
    {headerTitle:"Objectives",img:'assets/sgsGoal.png',url:'/goals/'},
  ]

  changeLang(){
    if(document.documentElement.lang === 'en'){
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.lang = "ar";
      this.lang = "EN";
      localStorage.setItem('lang',"ar");
      this.pageHeader = this.pageHeaderAR;
      this.description = this.descriptionAR;
      this.information = this.informationAR;

    }else{
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.lang = "en";
      this.lang = "ع";
      localStorage.setItem('lang',"en");
      this.pageHeader = this.pageHeaderEN;
      this.description = this.descriptionEN;
      this.information = this.informationEN;

    }

  }
}
