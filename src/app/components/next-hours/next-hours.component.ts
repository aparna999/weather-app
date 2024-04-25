import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather-data';
import { DateTimeFormaterPipe } from '../../pipes/time/date-time-formater.pipe';

@Component({
  selector: 'app-next-hours',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    DateTimeFormaterPipe,
  ],
  templateUrl: './next-hours.component.html',
  styleUrl: './next-hours.component.scss',
})
export class NextHoursComponent implements OnInit {
  @Input() displayingCity: string = '';

  hourlyWeatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getHourly(this.displayingCity).subscribe((data) => {
      this.hourlyWeatherData = data;
    });
  }
}
