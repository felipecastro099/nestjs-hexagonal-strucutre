import { Module } from '@nestjs/common';
import ProductFactory from './factory/product.factory';
import GetAllProductsUseCase from './useCases/getAllProducts.usecase';
import GetProductUseCase from './useCases/getProduct.usecase';
import DeleteProductUseCase from './useCases/deleteProduct.usecase';
import UpdateProductUseCase from './useCases/updateProduct.usecase';
import CreateProductUseCase from './useCases/createProduct.usecase';
import ProductRepositoryTypeorm from '../infrastructure/adapters/repositories/product.repository.typeorm';
import { DomainModule } from '../domain/domain.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductEntity from '../infrastructure/adapters/repositories/entity/product.entity';

@Module({
  imports: [DomainModule, TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    ProductFactory,
    GetAllProductsUseCase,
    GetProductUseCase,
    CreateProductUseCase,
    DeleteProductUseCase,
    UpdateProductUseCase,
    {
      provide: 'ProductRepository',
      useClass: ProductRepositoryTypeorm,
    },
  ],
  exports: [
    ProductFactory,
    GetAllProductsUseCase,
    GetProductUseCase,
    CreateProductUseCase,
    DeleteProductUseCase,
    UpdateProductUseCase,
  ],
})
export class ApplicationModule {}
