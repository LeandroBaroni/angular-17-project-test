import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Auth, User as FireUser, ParsedToken, authState, signOut } from '@angular/fire/auth';
import { LocalStorage } from '@burand/angular/utils';
import { BehaviorSubject, Observable, Subscription, lastValueFrom } from 'rxjs';
import { filter, first } from 'rxjs/operators';

import { isPlatformBrowser } from '@angular/common';
import { User } from '../models/user';
import { UserRepository } from '../repositories/user.repository';

const KEY = '@application/angular-testes/session/user';

@Injectable({
  providedIn: 'root'
})
export class SessionContext {
  protected loggedIn: BehaviorSubject<User>;
  protected disposable: Subscription = null;

  constructor(
    private auth: Auth,
    private _user: UserRepository,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const user = LocalStorage.getItem<User>(KEY);
      this.loggedIn = new BehaviorSubject(user || undefined);

      authState(this.auth).subscribe(currentUser => {
        if (currentUser) {
          this.listeners(currentUser.uid);
          this._user.setLastAccess(currentUser.uid);

          return;
        }

        this.unlisteners();
      });
    }
  }

  async getBearerToken(): Promise<string> {
    const userLogged = await this.getFirebaseUser();
    return userLogged.getIdToken();
  }

  async getClaims(): Promise<ParsedToken> {
    const currentUser = await this.getFirebaseUser();

    const { claims } = await currentUser.getIdTokenResult();

    return claims;
  }

  getFirebaseUser(): Promise<FireUser> {
    return lastValueFrom(authState(this.auth).pipe(first()));
  }

  get loggedUser(): Observable<User> {
    return this.loggedIn.pipe(filter(loggedIn => loggedIn !== undefined));
  }

  getLoggedUser(): User {
    return this.loggedIn.value;
  }

  private setLoggedUser(user: User): void {
    this.loggedIn.next(user);
    LocalStorage.setItem(KEY, user);
  }

  getLoggedUserId(): string {
    return this.loggedIn.value?.id;
  }

  async logout(): Promise<void> {
    LocalStorage.removeItem(KEY);

    this.loggedIn.next(undefined);

    await signOut(this.auth);
  }

  private listeners(userId: string): void {
    this.disposable = this._user.getAsyncById(userId).subscribe(data => {
      this.setLoggedUser(data);
    });
  }

  private unlisteners(): void {
    this.disposable?.unsubscribe();
  }
}
