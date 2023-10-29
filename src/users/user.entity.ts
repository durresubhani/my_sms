import { Product } from './../products/product.entity';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    address:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @Column()
    phone_number:string
    @OneToMany(()=>Product,(product)=>product.id)
    product:Product[];



}
