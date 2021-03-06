import {HttpClientModule} from '@angular/common/http';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlightApiModule} from '@flight-workspace/flight-api';

import {AppComponent} from './app.component';
import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app.routes';
import {BasketComponent} from './basket/basket.component';
//import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthService } from './shared/auth/auth.service';
import { CanExitGuard } from './shared/exit/exit.guard';

import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    // FlightBookingModule, // Don't import lazy modules

    FlightApiModule.forRoot(),
    SharedModule.forRoot(),

    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS})
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    //AuthGuard,
    AuthService,
    CanExitGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
