import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-weather-icon',
    templateUrl: './weather-icon.component.html',
    styleUrls: ['./weather-icon.component.css'],
})
export class WeatherIconComponent {
    private _data: object;
    @Input()
    set data(tempData: object) {
        this._data = tempData;
    }
    get data() {
        return this._data;
    }
}
