import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './weather.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { WeatherTextComponent } from './weather-text/weather-text.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';

registerLocaleData(localeZh);

@NgModule({
  declarations: [
    WeatherComponent,
    CalendarComponent,
    WeatherIconComponent,
    WeatherTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    NgZorroAntdModule.forRoot()
    // DemoUtilsModule
  ],
  providers: [],
  bootstrap: [WeatherComponent],
  exports: [WeatherComponent]
})
export class AppModule { }
