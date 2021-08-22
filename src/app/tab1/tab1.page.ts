import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lel = 'Schwul';
  Hobby: any;
  constructor(
    private storage: Storage,
    private calendar: Calendar
    ) {}


  zeigetext() {
    //this.lel = this.Hobby;
    console.log(this.lel);
    console.log('shs')
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
      );
  };
}



