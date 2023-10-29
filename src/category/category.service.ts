import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import {  Category } from './category.entity';
import { error } from 'console';
import { throwError } from 'rxjs';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private repo:Repository<Category>){}

   async create(name:string){
        const Category=await this.repo.create({name})
        console.log(Category)
        return this.repo.save(Category)
    }
    findOne( id : number ){
        return this.repo.findOneBy({id});
    }
    find(){
       return this.repo.find();
    }
    async update(id:number, attrs:Partial<Category>)
    {
        const Category=await this.findOne(id);
        if(!Category)
        {
            throw error('user is not found')
        }
        Object.assign(Category,attrs);
        return this.repo.save(Category);
    }
    async remove(id:number )
    {
        const Category = await this.findOne(id)
        if(!Category)
        {
            throw error('user is not found');
        }
        return this.repo.remove(Category);
    }
}