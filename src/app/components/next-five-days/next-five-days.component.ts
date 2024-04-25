import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-next-five-days',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './next-five-days.component.html',
  styleUrl: './next-five-days.component.scss',
})
export class NextFiveDaysComponent {}
