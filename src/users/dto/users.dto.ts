import { Exclude,Expose } from "class-transformer";
export class CreateUserDto{
    @Expose()
    name:string;
   
    @Expose()
    address:string;
   
    @Expose()
    email:string;

    @Exclude()
    password:string;
     
    @Expose()
    phone_number:string;
}