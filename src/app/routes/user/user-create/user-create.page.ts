import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  standalone: true,
  template: `<p>user-create works!</p>`,
  styleUrl: './user-create.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreatePage { }
