import { Injectable, Inject } from '@nestjs/common';
import { ProductRepository } from 'src/domain/ports/product.repository';

@Injectable()
export default class DeleteProductUseCase {
  constructor(
    @Inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  public handler(productId: number): Promise<void> {
    return this.productRepository.deleteProduct(productId);
  }
}
