import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
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
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductUseCase: GetProductUseCase,
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
  ) {}

  @Get()
  public async getProducts(@Res() request): Promise<any> {
    const products = await this.getAllProductsUseCase.handler();
    return request.status(HttpStatus.OK).json(products);
  }

  @Get(':id')
  public async getProduct(
    @Res() request,
    @Param('id') id: number,
  ): Promise<any> {
    const product = await this.getProductUseCase.handler(id);
    return request.status(HttpStatus.OK).json(product);
  }

  @Post()
  public async createProduct(
    @Res() request,
    @Body() product: ProductCommand,
  ): Promise<any> {
    const productCreated = await this.createProductUseCase.handler(product);
    return request.status(HttpStatus.CREATED).json(productCreated);
  }

  @Delete(':id')
  public async deleteProduct(
    @Res() request,
    @Param('id') id: number,
  ): Promise<any> {
    const product = await this.deleteProductUseCase.handler(id);
    return request.status(HttpStatus.OK).json(product);
  }

  @Put(':id')
  public async updateProduct(
    @Res() request,
    @Param('id') id: number,
    @Body() product: Product,
  ): Promise<any> {
    const productUpdated = await this.updateProductUseCase.handler(id, product);
    return request.status(HttpStatus.OK).json(productUpdated);
  }
}
