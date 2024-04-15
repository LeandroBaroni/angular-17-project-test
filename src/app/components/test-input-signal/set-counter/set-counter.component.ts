import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-set-counter',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './set-counter.component.html'
})
export class SetCounterComponent {
  counter = 10;

  onIncrement() {
    this.counter++;
  }
}
