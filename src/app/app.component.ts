import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Observable, of } from 'rxjs';

import { NextHoursComponent } from './components/next-hours/next-hours.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NextFiveDaysComponent } from './components/next-five-days/next-five-days.component';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NextHoursComponent,
    NextFiveDaysComponent,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cities = ['Rio de Janeiro', 'Beijing', 'Los Angeles'];
  lastUpdatedTimestamp$: Observable<string> = of();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.lastUpdatedTimestamp$ = this.weatherService.getLastCallTimestamp();
  }
}
