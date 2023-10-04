import { UsersService } from './users.service';
import { Controller } from '@nestjs/common';
import{Get,Post,Patch,Delete,Body,Param,Query,NotFoundException,UseInterceptors,ClassSerializerInterceptor} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
@Controller('auth')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Post('/signup')
    createUser(@Body() body:CreateUserDto){
        this.usersService.create(body.name,body.address,body.email,body.password,body.phone_number)
    }
}
