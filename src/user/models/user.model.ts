import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Post } from '../../post/models/post.model';
import { Comment } from '../../comment/models/comment.model';

enum RoleEnum {
  Admin,
  Author,
}

registerEnumType(RoleEnum, {
  name: 'RoleEnum',
});

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => RoleEnum)
  role: RoleEnum;

  @Field((type) => [Post])
  posts: Post[];

  @Field((type) => [Comment])
  comments: Comment[];
}
