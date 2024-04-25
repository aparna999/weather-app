import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather-data';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-next-hours',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './next-hours.component.html',
  styleUrl: './next-hours.component.scss',
})
export class NextHoursComponent implements OnInit {
  @Input() displayingCity: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    console.log(this.displayingCity);
    // this.weatherService
    //   .get5Days('')
    //   .subscribe((res: WeatherData) => console.log(res.list[10].dt_txt));
  }
}
