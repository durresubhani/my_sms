import { AuthService } from './auth.service';

import { Body,Controller, Post,Get,Patch,Delete,Param,Query,NotFoundException,Session,UseGuards} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptor/serlize.interceptor';
import { UserDto } from './dto/users.dtos';
import { CreateSigninDto } from './dto/create-signin.dto';
import { CurrentUser } from './decorator/current-user.decorator';
import { AuthGuards } from 'src/guards/auth.guard';

@Controller('auth')
@Serialize(UserDto)

export class UsersController {

    constructor(private usersService:UsersService,private authService:AuthService){}
    
    @Post('/signup')
    async createUser(@Body() body:CreateUserDto , @Session() session:any ){
      const user= await this.authService.signup(body.name,body.address,body.email,body.password,body.phone_number)
        // session.userId=user.id;
        // session.userId=user.id;
        console.log(session.userId=user.name)
        return user;
   
    }
    // @UseInterceptors(new SerializeInterceptor(UserDto))
    

    @Post('/signin')
    async signin(@Body() body:CreateSigninDto , @Session() session:any){
        const user= await this.authService.signin(body.email,body.password)
        session.userId = user.id;
        return user;
    }

    @Get('/whoami')
    @UseGuards(AuthGuards)
    async whoAmI(@CurrentUser() user:User){
        const response = user;
        console.log(response);
        
        return response;
    }
    @Post('/signout')
    signOut(@Session() session: any) {
      session.userId = null;
    }
  


    @Get('/:id')
    
   async findUser(@Param('id') id:string)
    {
        const user=await this.usersService.findOne(parseInt(id));
        if(!user)
        {
            throw new NotFoundException('User is not found')
        }
        return user
    }
    @Get()
    async findAllUser(@Query('email') email:string)
    {
       const user = await this.usersService.find(email)
        return user;
    }

    @Delete('/:id')
    async removeUser(@Param('id') id:string)
    {
        const user= await this.usersService.remove(parseInt(id));
        return user
    }

    @Patch('/:id')
    async updateUser(@Param('id') id:string, @Body() body:UpdateUserDto)
    {
        const user = await this.usersService.update(parseInt(id),body)
    }
}