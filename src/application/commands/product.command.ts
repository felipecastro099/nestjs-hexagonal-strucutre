import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class ProductCommand {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsNumber()
  public price: number;
}
