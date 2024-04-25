import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  //Usually, the api url and key should be accessed from environment files
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = '482944e26d320a80bd5e4f23b3de7d1f';

  constructor(private http: HttpClient) {}

  //The free open api subscription is not providing hourly data, instead provides 3-hour Forecast for 5 days.
  //So I could display only 3 hrs forcast instead of hourly
  getHourly(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'imperial')
      .set('cnt', '4'); //fetch data for next 4 data points

    return this.http.get<WeatherData>(this.apiUrl, { params });
  }

  get5Days(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'imperial');
    return this.http.get<WeatherData>(this.apiUrl, { params });
  }
}
