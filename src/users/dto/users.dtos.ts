import { Exclude, Expose} from "class-transformer";

export class UserDto{
    @Expose()
    name:string
    @Expose()
    email:string
   
    @Expose()
    address:string
    @Expose()
    phone_number:string
}