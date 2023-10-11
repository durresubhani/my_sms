import { IsNumber,IsString } from "class-validator";
export class CreateProductDto{
    
    @IsString()
    name:string;
    @IsString()
    category:string;
    @IsNumber()
    price:number;
    @IsNumber()
    retail:number;
    @IsNumber()
    quantity:number;
    
}