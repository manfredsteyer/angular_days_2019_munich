import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  constructor(private oauthService: OAuthService) { }

  login(): void {
    this.oauthService.initImplicitFlow(); // == Login durchführen
  }

  logout(): void {
    this.oauthService.logOut();
  }

}
