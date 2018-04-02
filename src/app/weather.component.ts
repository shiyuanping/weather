import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { NzMessageService } from 'ng-zorro-antd';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  city: string;
  text: any[] = [];
  weatherData: any[] = [];

  view = 'month';

  viewDate: Date = new Date();

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('https://free-api.heweather.com/s6/weather/forecast?location=xiamen&key=3bb7c4d3bae147bcbe7756e448d2115b')
    .map(res => res.json()).subscribe(
      data => {
        this.city = data.HeWeather6[0].basic.location;
        this.text = data.HeWeather6[0].daily_forecast;
        const temp = [];
        this.text.map(item => {
          temp.push({
            date: item.date,
            now: item.cond_txt_d,
            next: item.cond_txt_n,
            tmp_min: item.tmp_min,
            tmp_max: item.tmp_max
          });
        });
        this.weatherData = temp;
        // console.log(this.weatherData);
      }
    );
  }
}
