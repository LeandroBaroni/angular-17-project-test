import { Component, input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  value = input(0);
}
