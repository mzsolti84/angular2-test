import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminAuthGuard } from './admin.authguard';

const routesWithChild: Routes = [
  {
    path: '',
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: 'users',
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesWithChild)
  ],
  providers: [

  ]
})
export class AdminModule { }
