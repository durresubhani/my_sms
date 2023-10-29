
import { Body,Controller, Post,Get,Patch,Delete,Param,Query,NotFoundException,UseGuards,UseInterceptors,ClassSerializerInterceptor} from '@nestjs/common';
;
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AuthGuards } from 'src/guards/auth.guard';
@Controller('category')
@UseGuards(AuthGuards)
export class CategoryController {

    constructor(private categoryService:CategoryService){}
    
    @Post('/newcategory')
    async createCategory(@Body() body:CreateCategoryDto){
      
        const category = await this.categoryService.create(body.name);
       
        return category;
    }
    @Get('/:id')
    
   async findCategory(@Param('id') id:string)
    {
        const product=await this.categoryService.findOne(parseInt(id));
        if(!product)
        {
            throw new NotFoundException('product is not found');
        }
        return product;
    }
    @Get()
   async findAllCategory()
    {
        const category=await this.categoryService.find();
        return category;
    }

    @Delete('/:id')
    async removeCategory(@Param('id') id:string)
    {
       const category =await this.categoryService.remove(parseInt(id));
       return category;
    }

    @Patch('/:id')
    async updateCategory(@Param('id') id:string, @Body() body:UpdateCategoryDto)
    {
       const product=await this.categoryService.update(parseInt(id),body);
       return product;

    }
}