import { Product } from 'src/products/product.entity';
import {Entity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm';
import { User } from 'src/users/user.entity';
@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    product_name:string;
    @Column()
    destination:string;
    @Column()
    order_date:Date;
    @Column()
    items:number;
    @Column()
    phone_number:number;
    @ManyToOne(()=>Product,(product)=>product.id)
    product:Product;
    @ManyToOne(()=>User,(user)=>user.id)
    user:User;
}
