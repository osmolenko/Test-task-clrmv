import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { NotFoundException } from '@nestjs/common';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query((returns) => Post)
  async user(@Args('id') id: string): Promise<Post> {
    const user = await this.postService.findOne(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(returns=>Post)
  async post(@Args('text') text:string, @Args('id') id?:string ){
    return
  }

  @Mutation(returns => Boolean)
  async deletePost(@Args('id')id:string){
    return 'hello'
  }



}
