import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import { User } from './user.entity';
import { error } from 'console';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo:Repository<User>){}

    create(name:string,address:string,email:string,password:string,phone_number:string){
        const user=this.repo.create({name,address,email,password,phone_number})

        return this.repo.save(user)
    }
    findOne(id:number){
        return this.repo.findOneBy({id})

    }
    find(email:string)
    {
        return this.repo.find({where:{email}})
    }
    async update(id:number, attrs:Partial<User>)
    {
        const user=await this.findOne(id);
        if(!user)
        {
            throw error('user is not found')
        }
        Object.assign(user,attrs);
        return this.repo.save(user);
    }
    async remove(id:number )
    {
        const user = await this.findOne(id)
        if(!user)
        {
            throw error('user is not found');
        }
        return this.repo.remove(user);
    }
}
