import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../../models/weather-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  api_base_url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  api_key = '482944e26d320a80bd5e4f23b3de7d1f';

  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  //https://api.openweathermap.org/data/2.5/weather?q=LosAngeles&appid=482944e26d320a80bd5e4f23b3de7d1f

  //https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}

  constructor(private http: HttpClient) {}

  getCurrent(city: string) {
    return this.http.get(
      this.api_base_url +
        'weather?q=' +
        'Los Angeles' +
        '&appid=' +
        this.api_key
    );
  }

  getHourly(city: string) {
    return this.http.get(
      this.api_base_url +
        'Los Angeles' +
        '&units=imperial' +
        '&appid=' +
        this.api_key
    );
  }

  get5Days(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      this.api_base_url +
        'Los Angeles' +
        '&units=imperial' +
        '&appid=' +
        this.api_key
    );
  }
}
