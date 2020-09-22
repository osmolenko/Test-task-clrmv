import { Args, Query, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostService } from './post.service';
import { NotFoundException } from '@nestjs/common';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query((returns) => Post)
  async user(@Args('id') id: string): Promise<Post> {
    const user = await this.postService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }
}
