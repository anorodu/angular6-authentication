import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';

// @ts-ignore
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false, enableTracing: true})
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutesModule {
}
