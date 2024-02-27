import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFormLoginProps } from '../../../core/interfaces/form.interface';
import { InputEmailComponent } from '../../../forms/input-email/input-email.component';

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule, InputEmailComponent]
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);

  formGroup: FormGroup<IFormLoginProps> = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]]
  });

  isSubmitting = false;

  handleSubmit() {
    this.isSubmitting = true;
    try {
      if (this.formGroup.invalid) {
        throw new Error('Preencha todos os campos');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro ao cadastrar usuário.';
      console.error(errorMessage);
    }

    this.isSubmitting = false;
  }
}
