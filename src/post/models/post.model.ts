import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';
import { Comment } from '../../comment/models/comment.model';

@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field((type) => User)
  author: User;

  @Field()
  text: string;

  @Field((type) => [Comment])
  comments: [Comment];
}
