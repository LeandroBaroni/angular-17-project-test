import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { signalUserService } from '../../../core/services/signal-user.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBComponent {
  user = inject(signalUserService).user;
  builder = inject(FormBuilder);

  protected form = this.builder.group({
    name: [''],
    email: [''],
  });

  handleSubmit() {
    const { name, email } = this.form.value;

    this.user.update((user) => {
      return { ...user, name, email };
    });
  }
}
