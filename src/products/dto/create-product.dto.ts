import { IsNumber,IsString } from "class-validator";
export class CreateProductDto{
    
    @IsString()
    name:string;
    @IsString()
    categoryId:number;
    @IsNumber()
    price:number;
    @IsNumber()
    retail:number;
    @IsNumber()
    quantity:number;
    
}