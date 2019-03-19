import { Component, OnInit } from '@angular/core';
import { Router, GuardsCheckStart, GuardsCheckEnd, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from "@angular/router";
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  showLoadingIndicator: boolean = false;

  constructor(
    private oauthService: OAuthService,
    private router: Router) {


      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();

    router.events
          .filter(e => e instanceof NavigationStart
                  || e instanceof GuardsCheckEnd)
          .subscribe(event => {
                  this.showLoadingIndicator = true;
          });

    router.events.filter(
                    e => e instanceof NavigationEnd
                        || e instanceof  NavigationError
                        || e instanceof NavigationCancel
                        || e instanceof GuardsCheckStart )
          .subscribe(event => {
                  this.showLoadingIndicator = false;
          });

    }
}
