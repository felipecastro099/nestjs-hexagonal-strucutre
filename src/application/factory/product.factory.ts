import { Injectable } from '@nestjs/common';
import Product from '../../domain/product';
import ProductCommand from '../commands/product.command';

@Injectable()
export default class ProductFactory {
  public createProduct(productCommand: ProductCommand): Product {
    return new Product(
      0,
      productCommand.name,
      productCommand.description,
      productCommand.price,
      new Date(),
    );
  }
}
