import { Injectable, Inject } from '@nestjs/common';
import { ProductRepository } from 'src/domain/ports/product.repository';

@Injectable()
export default class DeleteProductUseCase {
  constructor(
    @Inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  public async handler(productId: number): Promise<void> {
    return this.productRepository.deleteProduct(productId);
  }
}
