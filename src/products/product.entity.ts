import {Entity,Column,PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { User } from 'src/users/user.entity';
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    category:string;
    @Column()
    price:number;
    @Column()
    retail:number;
    @Column()
    quantity:number;
    @ManyToOne(()=>User,(user)=>user.id)
    user;User;
}
