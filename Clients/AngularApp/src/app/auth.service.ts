import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(environment.oauthConfig as AuthConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  getIdTokenClaims(): Record<string, any> | null {
    const claims = this.oauthService.getIdentityClaims();
    return claims ? claims as Record<string, any> : null;
  }


  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }
}
