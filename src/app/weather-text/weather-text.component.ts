import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-weather-text',
    templateUrl: './weather-text.component.html',
    styleUrls: ['./weather-text.component.css']
})
export class WeatherTextComponent {
    private _data: object;
    @Input()
    set data(tempData: object) {
        this._data = tempData;
    }
    get data() {
        return this._data;
    }
}
