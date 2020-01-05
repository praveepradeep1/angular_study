import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN', 'USER'],
        except: ['GUEST'],
        redirectTo: '/login'
      }
    },
    children: [
      {
        path: 'home',
        loadChildren: './component/home/home.module#HomeModule'
      }
  ]
},

{
  path: 'login',
  canActivate: [NgxPermissionsGuard],
  loadChildren: './auth/auth.module#AuthModule'
},

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
