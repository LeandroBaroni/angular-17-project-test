import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/auth/login/login.component').then(c => c.LoginComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UnauthenticatedRoutingModule {}
