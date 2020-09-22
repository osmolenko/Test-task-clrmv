import { Args, Query, Resolver } from '@nestjs/graphql';
import { CommentService } from '../comment/comment.service';
import { Comment } from '../comment/models/comment.model';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query((returns) => Comment)
  async user(@Args('id') id: string): Promise<Comment> {
    const user = await this.commentService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }
}
