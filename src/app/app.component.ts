import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';

import { NextHoursComponent } from './components/next-hours/next-hours.component';
import { NextFiveDaysComponent } from './components/next-five-days/next-five-days.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabsModule,
    NextHoursComponent,
    NextFiveDaysComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';
  cities = ['Rio de Janeiro', 'Beijing', 'Los Angeles'];
}
