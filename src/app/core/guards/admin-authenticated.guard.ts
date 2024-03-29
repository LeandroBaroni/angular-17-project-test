import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SessionContext } from '../contexts/session.context';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {
  async canActivate(useSession: SessionContext, router: Router): Promise<boolean | UrlTree> {
    const isLogged = await useSession.getClaims();

    if (!isLogged) {
      return router.parseUrl('/login');
    }

    return true;
  }
}

export function canAdminActivateAuthenticated(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
  return inject(AuthGuardService).canActivate(inject(SessionContext), inject(Router));
}
