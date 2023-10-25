import { Module } from '@nestjs/common';
import { OrdersController } from './products.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class ProductsModule {}
