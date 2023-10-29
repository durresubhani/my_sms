import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm'
import { User } from 'src/users/user.entity';
import { Category } from 'src/category/category.entity';
import { Order } from 'src/order/order.entity';
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    categoryId:number;
    @Column()
    price:number;
    @Column()
    retail:number;
    @Column()
    quantity:number;

    @OneToMany(()=>User,(user)=>user.id)
    user:User[];

    @OneToMany(()=>Category,(category)=>category.id)
    category:Category[];

    @OneToMany(()=>Order,(order)=>order.id)
    order:Order[];
}
