import { IsEmail } from 'class-validator';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { error } from 'console';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(
    name: string,
    address: string,
    email: string,
    password: string,
    phone_number: string,
  ) {
    const users = await this.userService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }
    //hash and user password
    //create salt
    const salt = randomBytes(8).toString('hex');

    // hash and salt the password
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    //join hashed result and salt together
    const result = salt + '.' + hash.toString('hex');

    // create a new user and store it into db
    const user= await this.userService.create(name,address,email,result,phone_number);
    //return the user
    return user;
  }


  async signin(email:string,password:string){
    const [user]= await this.userService.find(email)
    if(!user)
    {
      throw new NotFoundException('user is not found')
    }

    const [salt, storedHash]=user.password.split('.');

    
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if(storedHash != hash.toString('hex'))
    {
      throw new BadRequestException('bad password');
    }

    return user;
     
  }
}