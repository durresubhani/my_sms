
import { Body,Controller, Post,Get,Patch,Delete,Param,Query,NotFoundException,UseInterceptors,ClassSerializerInterceptor} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('auth')
export class UsersController {

    constructor(private usersService:UsersService){}
    
    @Post('/signup')
   async createUser(@Body() body:CreateUserDto){
      
       const user=await this.usersService.create(body.name,body.address,body.email,body.password,body.phone_number)
        return user;
    }
    @Get('/:id')
    // @UseInterceptors(ClassSerializerInterceptor)
   async findUser(@Param('id') id:string)
    {
        const user=await this.usersService.findOne(parseInt(id));
        if(!user)
        {
            throw new NotFoundException('User is not found')
        }
        return user;
    }
    @Get()
    async findAllUser(@Query('email') email:string)
    {
       const user= await this.usersService.find(email)
       return user;

    }

    @Delete('/:id')
   async removeUser(@Param('id') id:string)
    {
       const user= await this.usersService.remove(parseInt(id));
       return user;
    }

    @Patch('/:id')
    updateUser(@Param('id') id:string, @Body() body:UpdateUserDto )
    {
        this.usersService.update(parseInt(id),body)
    }
}