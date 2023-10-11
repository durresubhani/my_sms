import { Product } from './product.entity';
import { Controller,Get, Post, Body ,Query} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService:ProductsService){}
    @Post('/addProduct')
    async createProduct(@Body() body:CreateProductDto){
      
        const product=await this.productsService.create(body.name,body.category,body.price,body.retail,body.quantity)
         return product;
     }
     @Get('/showAllProducts')
     async findProducts()
     {
        const products=await this.productsService.findAll();
        return products;
     }
     @Get()
     async find(@Query('name') name:string)
     {
        const product=await this.productsService.find(name)
      return product;
     }




}
