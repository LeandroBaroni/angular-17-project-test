import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { signalUserService } from '../../../../../core/services/signal-user.service';

@Component({
  selector: 'app-component-c',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component-c.component.html',
  styleUrl: './component-c.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentCComponent {
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
