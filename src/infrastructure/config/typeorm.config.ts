import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  dropSchema: true,
  entities: [
    'dist/src/infrastructure/adapters/repositories/entity/*.entity{.ts,.js}',
  ],
  synchronize: true,
  autoLoadEntities: true,
};
