import { Module } from '@nestjs/common';
import ProductController from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      dropSchema: true,
      entities: [
        'dist/src/infrastructure/adapters/repositories/entity/*.entity{.ts,.js}',
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ApplicationModule,
  ],
  controllers: [ProductController],
})
export class InfrastructureModule {}
