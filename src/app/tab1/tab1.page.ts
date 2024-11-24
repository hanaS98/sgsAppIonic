import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss','tab1.page.css']
})
export class Tab1Page {

  constructor() {}
  pageHeader="عن الهيئة";
  description="أنشئت هيئة المساحة الجيولوجية السعودية في عام 1420ه‍ 1999م، بقرار رقم 115 والصادر عن مجلس الوزراء الموقر. وترتبط هيئة المساحة الجيولوجية السعودية إرتباطاً مباشراً بوزارة الصناعة والثروة المعدنية. ولها شخصية اعتبارية وتتمتع بالأهلية الكاملة لتحقيق التنظيم الخاص به";
  information=[
    {headerTitle:"رؤية الهيئة",img:'assets/sgsVision.png',url:'/vision/'},
    {headerTitle:"رسالة الهيئة",img:'assets/sgsMessage.svg',url:'/message/'},
    {headerTitle:"أهداف الهيئة",img:'assets/sgsGoal.png',url:'/goals/'},
  ]
}
