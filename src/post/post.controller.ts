import { Body, Controller, Delete, HttpCode, Param, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import JwtAuthGuard from '../auth/jwtAuth.guard';
import { CreatePostDto } from './dto/createPost.dto';
import ReqUser from '../reqs/reqUser.interface';
import { ACGuard, UseRoles } from 'nest-access-control';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('find')
  async findPost(@Body() id:string){
    return this.postService.findOne(id)
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource:'post',
    action:'create',
    possession:'own'
  })
  @Post('create')
  async createPost(@Body() postData: CreatePostDto, @Req() requser: ReqUser){
    return this.postService.create(postData, requser.user)
  }

  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource:'post',
    action:'delete',
    possession:'own'
  })
  @Delete('delete')
  async deletePost(@Body() postData: CreatePostDto){
    return this.postService.delete(postData)
  }


}
