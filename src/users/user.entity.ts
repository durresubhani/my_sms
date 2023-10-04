import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
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
}
