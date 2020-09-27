import { Body, Controller, HttpCode, Param, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import JwtAuthGuard from '../auth/jwtAuth.guard';
import { CreatePostDto } from './dto/createPost.dto';
import ReqUser from '../reqs/reqUser.interface';

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
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createPost(@Body() postData: CreatePostDto, @Req() requser: ReqUser){
    return this.postService.create(postData, requser.user)
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deletePost(@Body() postData: CreatePostDto){
    return this.postService.delete(postData)
  }


}
