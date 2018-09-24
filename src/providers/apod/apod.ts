import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Apod } from '../../apod';

@Injectable()
export class ApodProvider {

  private domain:string='https://api.nasa.gov/planetary/';
  private args:string='apod?api_key=';
  private nasaKey:string = 'WP2mSsy8GZDxLVSZbEkV4pWbChJRhS8OvBj4ZhAW';
  private url:string;

  constructor(private http:HttpClient){}

  private setUrl(date=''){
    if(date){
      date=`&date=${date}`;
    }

    this.url = `${this.domain}${this.args}${this.nasaKey}${date}`;
  }

  public getApod(date=''): Observable<Apod>{
    this.setUrl(date);
    return this.http.get<Apod>(this.url);
  }

}
