import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import Product from '../../domain/product';
import ProductCommand from '../../application/commands/product.command';
import GetAllProductsUseCase from '../../application/useCases/getAllProducts.usecase';
import GetProductUseCase from '../../application/useCases/getProduct.usecase';
import CreateProductUseCase from '../../application/useCases/createProduct.usecase';
import DeleteProductUseCase from '../../application/useCases/deleteProduct.usecase';
import UpdateProductUseCase from '../../application/useCases/updateProduct.usecase';

@Controller('products')
export default class ProductController {
  constructor(
    private getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductUseCase: GetProductUseCase,
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
  ) {}

  @Get()
  public async getProducts(): Promise<any> {
    return this.getAllProductsUseCase.handler();
  }

  @Get(':id')
  public async getProduct(@Param('id') id: number): Promise<any> {
    return await this.getProductUseCase.handler(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async createProduct(@Body() product: ProductCommand): Promise<any> {
    return this.createProductUseCase.handler(product);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  public async deleteProduct(@Param('id') id: number): Promise<any> {
    await this.deleteProductUseCase.handler(id);
  }

  @Put(':id')
  public async updateProduct(
    @Param('id') id: number,
    @Body() product: Product,
  ): Promise<any> {
    return this.updateProductUseCase.handler(id, product);
  }
}
