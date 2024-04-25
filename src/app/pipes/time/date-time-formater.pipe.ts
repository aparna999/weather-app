import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormater',
  standalone: true,
})
export class DateTimeFormaterPipe implements PipeTransform {
  transform(timestamp: string): string {
    if (!timestamp) return '';

    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    return `${hours}:${minutes} ${amOrPm}`;
  }
}
