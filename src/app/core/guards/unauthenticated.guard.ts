import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SessionContext } from '../contexts/session.context';

@Injectable({
  providedIn: 'root'
})
class NotAuthGuardService {
  async canActivate(useSession: SessionContext, router: Router): Promise<boolean | UrlTree> {
    const isLogged = await useSession.getClaims().catch(() => null);

    if (isLogged) {
      return router.parseUrl('/dashboard');
    }

    return true;
  }
}

export function canActivateUnauthenticated(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
  return inject(NotAuthGuardService).canActivate(inject(SessionContext), inject(Router));
}
