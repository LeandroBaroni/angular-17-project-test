import { Routes } from '@angular/router';
import { canActivateUnauthenticated } from './core/guards/unauthenticated.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: () => import('./routes/unauthenticated.routing').then(m => m.UnauthenticatedRoutingModule),
    canActivate: [canActivateUnauthenticated]
  },

  {
    path: '',
    loadChildren: () => import('./routes/authenticated.routing').then(m => m.AuthenticatedRoutingModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./routes/authenticated.routing').then(m => m.AuthenticatedRoutingModule),
  //   canActivate: [canActivateAuthenticated]
  // },

  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  }
];
