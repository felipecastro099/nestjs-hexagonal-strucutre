import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import Product from 'src/domain/product';
import { ProductRepository } from 'src/domain/ports/product.repository';
import { Optional } from 'typescript-optional';

@Injectable()
export default class GetProductUseCase {
  constructor(
    @Inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  public async handler(productId: number): Promise<Optional<Product>> {
    const product = this.productRepository.getProduct(productId);

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    return product;
  }
}
