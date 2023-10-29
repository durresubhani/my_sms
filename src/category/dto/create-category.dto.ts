import { IsNumber,IsString } from "class-validator";
export class CreateCategoryDto{
    
    @IsString()
    name:string;
   
    
}