import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['message.page.scss'],
})
export class MessagePage implements OnInit{

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

  header="رسالة الهيئة";
  home="الرئيسية";
  text='نستفيد من خبراتنا وشراكاتنا والتقنيات الحديثة لتحقيق قيمة مميّزة بوصفنا كمرجعية عليا عالمية في علوم الأرض للقطاعين العام والخاص في المملكة من خلال توفير خرائط وبيانات جيولوجية برؤى موضوعية علمية، وتنمية جيل قادم من المواهب';

  headerAR="رسالة الهيئة";
  homeAR="الرئيسية";
  textAR='نستفيد من خبراتنا وشراكاتنا والتقنيات الحديثة لتحقيق قيمة مميّزة بوصفنا كمرجعية عليا عالمية في علوم الأرض للقطاعين العام والخاص في المملكة من خلال توفير خرائط وبيانات جيولوجية برؤى موضوعية علمية، وتنمية جيل قادم من المواهب';

  headerEN="Mission";
  homeEN="Home";
  textEN='To benefit from our expertise, partnerships, and modern technologies to achieve a distinct value as a global reference in earth sciences for the public and private sectors in the Kingdom by providing geological maps and data with scientific objective visions and developing the next generations of talents';

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
