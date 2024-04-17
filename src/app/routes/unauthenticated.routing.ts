import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../pages/auth/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('../pages/auth/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'params/:pathId',
    loadComponent: () =>
      import('../routes/read-params-with-input/read-params-with-input.component').then(
        p => p.ReadParamsWithInputComponent
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UnauthenticatedRoutingModule {}
