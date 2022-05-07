import { KeycloakConnectOptions } from 'nest-keycloak-connect';

export const keycloakConfig: KeycloakConnectOptions = {
  authServerUrl: 'http://localhost:8080/auth',
  realm: 'master',
  clientId: 'my-nestjs-app',
  secret: 'secret',
};
