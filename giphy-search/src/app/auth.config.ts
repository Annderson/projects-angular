import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // URL da identificação do provedor.
  // URL of the identity provider
  issuer: 'http://localhost:8080/auth/realms/master',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id.
  // The SPA is registerd with this id at the auth-server.
  clientId: 'product-app',

  // Set the scope for the permisssions the client should request
  // The first three are defined by OIDC.
  scope: 'openid profile email',

  // Remove the requirement of using Https to simplify the demo
  // THIS SHOULD NOT BE USED IN PRODUCTION.
  // USE A CERTIFICATE FOR YOUR IDP
  // IN PRODUCTION
  requireHttps: false

}
