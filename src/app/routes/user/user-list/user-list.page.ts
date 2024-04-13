import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `<p>user-list works!</p>`,
  styleUrl: './user-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListPage { }
