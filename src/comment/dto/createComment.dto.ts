import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCommentDto {
  @Field() text: string
  @Field() id?:string
  @Field() isDelete?:boolean
}
