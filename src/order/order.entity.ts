import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
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
}
