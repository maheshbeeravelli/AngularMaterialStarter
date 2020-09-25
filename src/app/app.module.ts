import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViolationsComponent } from './violations/violations.component';
import { environment } from 'src/environments/environment';
import {
  MsAdalAngular6Module,
  AuthenticationGuard,
} from 'microsoft-adal-angular6';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ViolationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MsAdalAngular6Module.forRoot({
      clientId: environment.clientID,
      redirectUri: window.location.origin,
      navigateToLoginRequestUrl: true,
      cacheLocation: 'localStorage',
    }),
  ],
  providers: [AuthenticationGuard, AuthService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
