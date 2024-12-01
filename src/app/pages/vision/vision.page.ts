import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.page.html',
  styleUrls: ['./vision.page.scss','vision.page.css'],
})
export class VisionPage implements OnInit{

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
      this.text = this.textEN;
      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-forward-outline')

    }else{
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.setAttribute('lang','ar');
      this.lang="EN";
      this.header = this.headerAR;
      this.home = this.homeAR;
      this.text = this.textAR;
      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-back-outline')
    }
  }

  header="رؤية الهيئة";
  home="الرئيسية";
  text="أُنشئت هيئة المساحة الجيولوجية السعودية في عام 1420ه‍ 1999م، بقرار رقم 115 والصادر عن مجلس الوزراء الموقر. وترتبط هيئة المساحة الجيولوجية السعودية إرتباطاً مباشراً بوزارة الصناعة والثروة المعدنية. ولها شخصية اعتبارية وتتمتع بالأهلية الكاملة لتحقيق التنظيم الخاص به";

  headerAR="رؤية الهيئة";
  homeAR="الرئيسية";
  textAR="أُنشئت هيئة المساحة الجيولوجية السعودية في عام 1420ه‍ 1999م، بقرار رقم 115 والصادر عن مجلس الوزراء الموقر. وترتبط هيئة المساحة الجيولوجية السعودية إرتباطاً مباشراً بوزارة الصناعة والثروة المعدنية. ولها شخصية اعتبارية وتتمتع بالأهلية الكاملة لتحقيق التنظيم الخاص به";

  headerEN="Vision";
  homeEN="Home";
  textEN="Global leader in earth science research, conducting surveys on natural resources, and monitoring geological activities to safe society, and facilitate the Kingdom's efficient utilization of its natural resources";

  changeLang(){
    if(document.documentElement.lang === 'en'){
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.lang = "ar";
      this.lang = "EN";
      localStorage.setItem('lang',"ar");
      this.header = this.headerAR;
      this.home = this.homeAR;
      this.text = this.textAR;

      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-back-outline')
    }else{
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.lang = "en";
      this.lang = "ع";
      localStorage.setItem('lang',"en");
      this.header = this.headerEN;
      this.home = this.homeEN;
      this.text = this.textEN;

      let icon = document.getElementById('backIcon');
      icon?.setAttribute('name','caret-forward-outline')
    }

  }
  back(){
    history.back()
  }

}
