import { Product } from './product.entity';

import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private repo:Repository<Product>){}

    create(name:string,categoryId:number,price:number,retail:number,quantity:number){
        const product=this.repo.create({name,categoryId,price,retail,quantity})

        return this.repo.save(product)
    }
    // find(name:string){
    //      return this.repo.find({name})

    // }
    findAll(){
        return this.repo.find()

   }
    // findOne(id:number){
    //     return this.repo.findOneBy({id})

    // }
    find(name:string)
    {
        return this.repo.find({where:{name}})
    }
    // async update(id:number, attrs:Partial<User>)
    // {
    //     const user=await this.findOne(id);
    //     if(!user)
    //     {
    //         throw error('user is not found')
    //     }
    //     Object.assign(user,attrs);
    //     return this.repo.save(user);
    // }
    // async remove(id:number )
    // {
    //     const user = await this.findOne(id)
    //     if(!user)
    //     {
    //         throw error('user is not found');
    //     }
    //     return this.repo.remove(user);
    // }
}
