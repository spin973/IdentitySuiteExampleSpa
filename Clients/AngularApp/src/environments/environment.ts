export const environment = {
  production: false,
  oauthConfig: {
    issuer: 'https://localhost:5000/',
    clientId: 'angular',
    redirectUri: window.location.origin,
    responseType: 'code',
    scope: 'openid profile email',
    showDebugInformation: true
  }
};
