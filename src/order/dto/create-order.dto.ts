import { IsDate, IsNumber,IsOptional,IsString } from "class-validator";
export class CreateOrderDto{
    
    @IsString()
    product_name:string;
    @IsString()
    destination:string;
    @IsDate()
    order_date:Date;
    @IsNumber()
    items:number;
    @IsNumber()
    phone_number:number;
    
}