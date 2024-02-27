import { Component, computed, effect, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-signal-input',
  template: `<h1>Is Even: {{ isEven() }}</h1>`
})
export class SignalInputComponent {
  counter = input.required<number>();
  isEven = computed(() => this.counter() % 2 === 0);

  constructor() {
    effect(() => console.log(this.counter()));
  }
}
