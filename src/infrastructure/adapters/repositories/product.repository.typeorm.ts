import { ProductRepository } from '../../../domain/ports/product.repository';
import Product from '../../../domain/product';
import { Optional } from 'typescript-optional';
import { InjectRepository } from '@nestjs/typeorm';
import ProductEntity from './entity/product.entity';
import { Repository } from 'typeorm';
import ProductMapper from '../../mapper/product.mapper';

export default class ProductRepositoryTypeorm implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async createProduct(product: Product): Promise<Optional<Product>> {
    const productCreated = this.repository.create({
      name: product.name,
      description: product.description,
      price: product.price,
      createdAt: product.createAt,
    });

    return ProductMapper.toDomain(await this.repository.save(productCreated));
  }

  async deleteProduct(productId: number): Promise<void> {
    await this.repository.delete(productId);
  }

  async getAll(): Promise<Product[]> {
    return ProductMapper.toDomains(await this.repository.find());
  }

  async getProduct(id: number): Promise<Optional<Product>> {
    return ProductMapper.toDomain(
      await this.repository.findOne({ where: { id } }),
    );
  }

  async updateProduct(
    productId: number,
    product: Product,
  ): Promise<Optional<Product>> {
    return ProductMapper.toDomain(
      await this.repository.save({
        id: productId,
        name: product.name,
        description: product.description,
        price: product.price,
      }),
    );
  }
}
