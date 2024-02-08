import { FormControl } from '@angular/forms';

export interface IFormCreateProps {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
export interface IFormLoginProps {
  email: FormControl<string>;
  password: FormControl<string>;
}
