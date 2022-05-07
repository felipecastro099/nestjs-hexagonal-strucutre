import ProductFactory from '../factory/product.factory';
import { ProductRepository } from '../../domain/ports/product.repository';
import ProductCommand from '../commands/product.command';
import { Optional } from 'typescript-optional';
import Product from '../../domain/product';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export default class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository') private productRepository: ProductRepository,
    private productFactory: ProductFactory,
  ) {}

  public handler(productCommand: ProductCommand): Promise<Optional<Product>> {
    const product = this.productFactory.createProduct(productCommand);
    return this.productRepository.createProduct(product);
  }
}
