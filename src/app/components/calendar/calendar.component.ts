import { AfterViewInit, Component } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements AfterViewInit {
  ngAfterViewInit() {
    const calendar = flatpickr('#my-calendar', {
      defaultDate: new Date(),
      disableMobile: true // optional
    }) as flatpickr.Instance;

    console.log(calendar);
  }
}
