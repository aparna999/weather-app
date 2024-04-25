import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../../models/weather-data';

@Component({
  selector: 'app-next-hours',
  standalone: true,
  imports: [],
  templateUrl: './next-hours.component.html',
  styleUrl: './next-hours.component.scss',
})
export class NextHoursComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  //cities = Rio de Janeiro, Beijing , Los Angeles

  ngOnInit() {
    this.weatherService
      .get5Days('')
      .subscribe((res: WeatherData) => console.log(res.list[10].dt_txt));
  }
}
