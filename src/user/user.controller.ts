import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import JwtAuthGuard from '../auth/jwtAuth.guard';
import { UserService } from './user.service';
import { PostService } from '../post/post.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,) {}

  @UseGuards(JwtAuthGuard)
  @Get('get')
  async findUser(@Body() id:string){
    return this.userService.getUserInfo(id)
  }



}
