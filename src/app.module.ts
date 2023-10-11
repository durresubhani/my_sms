import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Product } from './products/product.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'admin123',
    database:'my_sms',
    entities:[User,Product],
    synchronize:true,
  }),
    UsersModule,
    ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
