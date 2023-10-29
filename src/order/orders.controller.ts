import { Order } from './order.entity';
import { Controller,Get, Post, Body ,Query} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('products')
export class OrdersController {

    constructor(private ordersService:OrdersService){}
    @Post('/addProduct')
    async createProduct(@Body() body:CreateOrderDto){
      
        const product=await this.ordersService.create(body.product_name,body.destination,body.order_date,body.items,body.phone_number)
         return product;
     }
     @Get('/showAllProducts')
     async findProducts()
     {
        const products=await this.ordersService.findall();
        return products;
     }
     @Get()
     async find(@Query('name') name:string)
     {
        const product=await this.ordersService.find(name)
      return product;
     }




}
