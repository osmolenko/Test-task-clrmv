import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentService } from '../comment/comment.service';
import { Comment } from '../comment/comment.entity';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query((returns) => Comment)
  async user(@Args('id') id: string): Promise<Comment> {
    const user = await this.commentService.findOne(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(returns=>Comment)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async post(@Args('text') text : string, @Args('id') id?:string , @Args('postId') postId?:string, ){
    return
  }

  @Mutation(returns => Boolean)
  async deletePost(@Args('id')id:string){
    return 'hello'
  }
}
