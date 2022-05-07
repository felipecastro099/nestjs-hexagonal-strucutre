import Product from 'src/domain/product';
import { Optional } from 'typescript-optional';

export interface ProductRepository {
  getAll(): Promise<Product[]>;

  getProduct(id: number): Promise<Optional<Product>>;

  createProduct(product: Product): Promise<Optional<Product>>;

  deleteProduct(productId: number): Promise<void>;

  updateProduct(
    productId: number,
    product: Product,
  ): Promise<Optional<Product>>;
}
