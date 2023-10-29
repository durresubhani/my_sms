import { IsEmail,IsString, } from "class-validator";

export class CreateSigninDto{
   
    @IsEmail()
    email:string
    @IsString()
    password:string
 
}