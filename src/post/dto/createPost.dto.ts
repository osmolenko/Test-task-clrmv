import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/user.entity';

@ObjectType()
export class CreatePostDto {
  @Field()  text: string
  @Field() id?:string
  @Field() isDelete?:boolean
}
