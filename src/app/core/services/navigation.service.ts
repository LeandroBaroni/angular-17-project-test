import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private location = inject(Location);
  private router = inject(Router);

  private history: string[] = [];
  private describe: Subscription;

  startSaveHistory() {
    this.describe = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public async goBack(): Promise<void> {
    this.history.pop();

    if (!this.history.length) {
      await this.router.navigateByUrl('/');
      return;
    }

    this.location.back();
  }

  public getPreviousUrl() {
    if (!this.history.length) {
      return '';
    }

    return this.history[this.history.length - 2];
  }
}
