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
import ProductCommand from '../../application/commands/product.command';
import GetAllProductsUseCase from '../../application/useCases/getAllProducts.usecase';
import GetProductUseCase from '../../application/useCases/getProduct.usecase';
import CreateProductUseCase from '../../application/useCases/createProduct.usecase';
import DeleteProductUseCase from '../../application/useCases/deleteProduct.usecase';
import UpdateProductUseCase from '../../application/useCases/updateProduct.usecase';
import { Public } from 'nest-keycloak-connect';

@Controller('products')
export default class ProductController {
  constructor(
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductUseCase: GetProductUseCase,
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
  ) {}

  @Get()
  @Public()
  public async getProducts(): Promise<any> {
    return this.getAllProductsUseCase.handler();
  }

  @Get(':id')
  @Public()
  public async getProduct(@Param('id') id: number): Promise<any> {
    return await this.getProductUseCase.handler(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @Public()
  public async createProduct(@Body() product: ProductCommand): Promise<any> {
    return this.createProductUseCase.handler(product);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @Public()
  public async deleteProduct(@Param('id') id: number): Promise<any> {
    await this.deleteProductUseCase.handler(id);
  }

  @Put(':id')
  @Public()
  public async updateProduct(
    @Param('id') id: number,
    @Body() product: ProductCommand,
  ): Promise<any> {
    return this.updateProductUseCase.handler(id, product);
  }
}
