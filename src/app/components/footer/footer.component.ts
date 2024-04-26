import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, of } from 'rxjs';

import { WeatherService } from '../../services/weather.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  lastUpdatedTimestamp$: Observable<string> = of();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.lastUpdatedTimestamp$ = this.weatherService.getLastCallTimestamp();
  }
}
