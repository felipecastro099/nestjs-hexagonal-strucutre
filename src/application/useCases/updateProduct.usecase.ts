import { Injectable, Inject } from '@nestjs/common';
import Product from 'src/domain/product';
import { ProductRepository } from 'src/domain/ports/product.repository';
import { Optional } from 'typescript-optional';
import ProductFactory from '../factory/product.factory';
import ProductCommand from '../commands/product.command';

@Injectable()
export default class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository') private productRepository: ProductRepository,
    private productFactory: ProductFactory,
  ) {}

  public async handler(
    productId: number,
    productCommand: ProductCommand,
  ): Promise<Optional<Product>> {
    const product = this.productFactory.createProduct(productCommand);
    return this.productRepository.updateProduct(productId, product);
  }
}
