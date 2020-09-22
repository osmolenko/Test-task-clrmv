import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';
import { Post } from '../../post/models/post.model';

@ObjectType()
export class Comment {
  @Field()
  id: string;

  @Field((type) => Post)
  post: Post;

  @Field((type) => User)
  author: User;

  @Field()
  text: string;
}
