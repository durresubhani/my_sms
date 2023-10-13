import { BadRequestException,Injectable,NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes,scrypt as _scrypt } from "crypto";
import { promisify } from "util";
const scrypt=promisify(_scrypt);
@Injectable()
export class AuthService{
    constructor(private usersService:UsersService){

    }
    async signup(name:string,address:string,email:string,phone_number:string,password:string){
        const users=await this.usersService.find(email)
        if(users.length)
        {
            throw new BadRequestException('Email in used')
        }
        const salt=randomBytes(8).toString('hex')
        const hash=(await scrypt(password,salt,32))as Buffer;
        const result= salt+'.'+hash.toString('hex');
        const user=await this.usersService.create(name,address,email,phone_number,password);
        return user;
    }
    async create(email:string,password:string)
    {
        const [user]=await this.usersService.find(email);
        if(!user)
        {
            throw new NotFoundException('User Not Found');
        }
        const [salt,storedhash]=user.password.split('.');
        const hash=(await scrypt(password,salt,32)) as Buffer;
        if(storedhash!=hash.toString('hex')){
            throw new BadRequestException('Password does not matched')
        }
        return user;

    }
}