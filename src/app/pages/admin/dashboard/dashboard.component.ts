import { Component } from '@angular/core';
import { CalendarComponent } from '../../../components/calendar/calendar.component';

@Component({
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [CalendarComponent]
})
export class DashboardComponent {}
