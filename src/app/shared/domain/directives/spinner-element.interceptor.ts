import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSpinnerElement]',
  standalone: true
})
export class SpinnerElementDirective {
  @Input()
  public set appSpinnerElement(value: boolean) {
    if (!value) {
      this._el.nativeElement.classList.remove('spin-icon');
      return;
    }

    this._el.nativeElement.classList.add('spin-icon');
  }

  public spinnerEl: HTMLDivElement;

  public constructor(private _el: ElementRef) {}
}
