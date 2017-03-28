/**
 * Created by tc949 on 2017/1/17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "./routers/page404/page404.component";
import {AuthLoginComponent} from "./routers/auth-login/auth-login.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'oauth/login', pathMatch: 'full'},
  {path: 'oauth/login', component: AuthLoginComponent},
  {path: '**', component: Page404Component}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouter {
}
