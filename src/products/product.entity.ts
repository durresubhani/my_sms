import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
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
}
