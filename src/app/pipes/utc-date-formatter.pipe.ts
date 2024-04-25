import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcDateFormatter',
  standalone: true,
})
export class UtcDateFormatterPipe implements PipeTransform {
  transform(timestamp: number): string {
    const utcDate = new Date(timestamp * 1000);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const dayOfWeek = utcDate.toLocaleDateString('en-US', { weekday: 'short' });
    const month = months[utcDate.getMonth()];
    const dayOfMonth = utcDate.getDate();
    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }
}
