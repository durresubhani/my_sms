import { IsEmail,IsString } from "class-validator";
export class CreateUserDto{
    @IsString()
    name:string;
   
    @IsString()
    address:string;
   
    @IsEmail()
    email:string;

    @IsString()
    password:string;
     
    @IsString()
    phone_number:string;
}