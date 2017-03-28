import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRouter} from "./app.router";
import {Page404Component} from "./routers/page404/page404.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AuthLoginComponent} from './routers/auth-login/auth-login.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FooterComponent,
    AuthLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    Ng2BootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
