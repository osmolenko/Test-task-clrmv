import { Body, Controller, Delete, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import JwtAuthGuard from '../auth/jwtAuth.guard';
import ReqUser from '../reqs/reqUser.interface';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';
import ReqPost from '../reqs/reqPost.interface';
import { ACGuard } from 'nest-access-control';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACGuard)
  @Post('create')
  async createPost(@Body() commentData: CreateCommentDto, @Req() reqpost: ReqPost, @Req() requser: ReqUser){
    return this.commentService.create(commentData, reqpost.post, requser.user)
  }

  @UseGuards(JwtAuthGuard, ACGuard)
  @Delete('delete')
  async deletePost(@Body() commentData: CreateCommentDto){
    return this.commentService.delete(commentData)
  }

}
