import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import{Repository} from 'typeorm'
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo:Repository<User>){
    }
    create(name:string,address:string,email:string,password:string,phone_number:string){
        const user=this.repo.create({name,address,email,password,phone_number})
        return this.repo.save(user)
    }
}
