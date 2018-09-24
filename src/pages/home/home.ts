import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApodProvider } from '../../providers/apod/apod';
import { Apod } from '../../apod';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  apod: Apod;
  date: string;

  constructor(
    public navCtrl: NavController,
    private apodProvider: ApodProvider
  ) {

  }

  ngOnInit() {
    this.getApod();
  }

  randomDate(start, end){
    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    let d:any = date.getDate();
    let m:any = date.getMonth() + 1;
    let y:any = date.getFullYear();

    if(m<10){
      m = '0'+m;
    }

    if(d<10){
      d = '0'+d;
    }

    return y + '-' + m + '-' + d;
  }

  getApod(date:string=''):void {
    this.apodProvider.getApod(date)
      .subscribe(apod => this.apod = apod);
  }

}
