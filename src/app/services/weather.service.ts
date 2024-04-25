import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather-data';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  //Usually, the api url and key should be accessed from environment files
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = '482944e26d320a80bd5e4f23b3de7d1f';
  private lastCallTimestamp: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  getLastCallTimestamp(): Observable<string> {
    return this.lastCallTimestamp
      .asObservable()
      .pipe(map((timestamp) => this.formatTimestamp(timestamp)));
  }

  private formatTimestamp(timestamp: number): string {
    const formattedDate = formatDate(timestamp, 'MMM dd HH:mm', 'en-US');
    return formattedDate;
  }

  //The free open api subscription is not providing hourly data, instead provides 3-hour Forecast for 5 days.
  //So I could display only 3 hrs forcast instead of hourly
  getHourly(city: string): Observable<WeatherData> {
    const currentTimestamp = Date.now(); // Current timestamp in milliseconds
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'imperial')
      .set('cnt', '4'); //fetch data for next 4 data points

    // Update lastCallTimestamp
    this.lastCallTimestamp.next(currentTimestamp);
    return this.http.get<WeatherData>(this.apiUrl, { params });
  }

  get5Days(city: string): Observable<WeatherData> {
    const currentTimestamp = Date.now(); // Current timestamp in milliseconds
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'imperial');

    // Update lastCallTimestamp
    this.lastCallTimestamp.next(currentTimestamp);
    return this.http.get<WeatherData>(this.apiUrl, { params });
  }
}
