import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, of } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather-data';
import { UtcDateFormatterPipe } from '../../pipes/date/utc-date-formatter.pipe';

@Component({
  selector: 'app-next-five-days',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    UtcDateFormatterPipe,
  ],
  templateUrl: './next-five-days.component.html',
  styleUrl: './next-five-days.component.scss',
})
export class NextFiveDaysComponent implements OnInit {
  @Input() displayingCity: string = '';

  weatherData$: Observable<WeatherData> = of();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherData$ = this.weatherService.get5Days(this.displayingCity);
  }
}
