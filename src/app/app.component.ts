import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NextHoursComponent } from './components/next-hours/next-hours.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NextHoursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';
}
