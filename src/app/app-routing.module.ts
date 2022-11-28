import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user', loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
    children: [
      {
        path: 'list', loadComponent: () => import('./user-list/user-list.component').then(m => m.UserListComponent)
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  },
  {
    path: '', redirectTo: 'user', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
