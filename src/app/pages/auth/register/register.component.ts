import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { fullNameValidator } from '@burand/angular';
import { IFormCreateProps } from '../../../core/interfaces/form.interface';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);

  form: FormGroup<IFormCreateProps> = this.formBuilder.group({
    name: ['', [Validators.required, fullNameValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]],
    confirmPassword: ['', [Validators.required, Validators.min(6)]]
  });

  isSubmitting = false;

  handleSubmit() {
    this.isSubmitting = true;
    try {
      if (this.form.invalid) {
        throw new Error('Preencha todos os campos');
      }

      const { password, confirmPassword, email, name } = this.form.value;
      if (JSON.stringify(password) !== JSON.stringify(confirmPassword)) {
        this.form.controls.confirmPassword.setErrors({ error: 'required' });
        throw new Error('Senhas não coincidem');
      }

      console.log(name);
      console.log(email);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro ao cadastrar usuário.';
      console.error(errorMessage);
    }

    this.isSubmitting = false;
  }
}
