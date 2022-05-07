import { Module } from '@nestjs/common';
import ProductController from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from '../application/application.module';
import { typeormConfig } from './config/typeorm.config';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { keycloakConfig } from './config/keycloak.config';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    KeycloakConnectModule.register(keycloakConfig),
    ApplicationModule,
  ],
  controllers: [ProductController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class InfrastructureModule {}
