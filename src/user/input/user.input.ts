import { registerEnumType } from '@nestjs/graphql';
import { Field, InputType } from 'type-graphql';

enum RoleEnum {
  Admin = 'Admin',
  Author = 'Author',
}

registerEnumType(RoleEnum, {
  name: 'RoleEnum',
});

@InputType()
export class userInput {
  @Field()  name: string;
  @Field()  email: string;
  @Field()  password: string;
  @Field(type => RoleEnum)  role: RoleEnum;
}
