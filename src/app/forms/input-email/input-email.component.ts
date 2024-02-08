import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { inputUUID } from '@burand/angular';
import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-email',
  standalone: true,
  templateUrl: './input-email.component.html',
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputEmailComponent,
      multi: true
    }
  ]
})
export class InputEmailComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string;
  @Input() label: string;

  id = inputUUID();
}
