import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NextHoursComponent } from './components/next-hours/next-hours.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NextFiveDaysComponent } from './components/next-five-days/next-five-days.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NextHoursComponent,
    NextFiveDaysComponent,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';

  cities = ['Rio de Janeiro', 'Beijing', 'Los Angeles'];
}
