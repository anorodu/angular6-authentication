import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutesModule} from './app.routes.module';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../config/interceptors/jwt.interceptor';
import {ErrorInterceptor} from '../config/interceptors/error.interceptor';
import {FakerInterceptor} from '../config/interceptors/faker.interceptors';
import {AuthenticationService} from '../services/authentication.service';
import {IdentityService} from '../services/identity.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    FakerInterceptor,
    AuthenticationService,
    IdentityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
