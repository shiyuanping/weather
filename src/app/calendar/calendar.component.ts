import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarDateFormatter } from 'angular-calendar';
import { NzMessageService } from 'ng-zorro-antd';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CustomDateFormatter } from './date-formatter.provider';


@Component({
    selector: 'app-calendar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    providers: [
      {
        provide: CalendarDateFormatter,
        useClass: CustomDateFormatter
      }
    ]
})
export class CalendarComponent implements OnInit {
    day: any;
    datas: any;
    wantDate: string;
    getWeather: any[] = [];
    sendWeather: object;

    view = 'month';
    viewDate: Date = new Date();
    private _weather: any[];

    locale = 'zh-Hans';

    @Input()
    set weather(data: any[]) {
        this._weather = data;
        this.getWeather = data;
    }
    get weather() {
        return this._weather;
    }

    constructor(private http: Http) {}
    ngOnInit() {
    }

    weatherData(day: any) {
        this.day = day;
        const d = new Date(this.day);
        const year = d.getFullYear();
        const month = d.getMonth();
        const date = d.getDate();
        this.wantDate = `${year}-${month > 9 ? month + 1 : '0' + (month + 1)}-${date > 9 ? date : '0' + date}`;
        // const youWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        // console.log(this.wantDate);
        this.datas = this.getWeather.filter(item => {
            return item.date === this.wantDate;
        });
        this.sendWeather = this.datas.length > 0 ? {
            ...this.datas[0],
        } : {
            date: '',
            now: '',
            next: '',
            tmp_min: '',
            tmp_max: ''
        };
        // console.log(this.sendWeather);
        return this.sendWeather;
    }
}

