import { Field, ObjectType } from 'type-graphql';
import { registerEnumType } from '@nestjs/graphql';

enum RoleEnum {
  Admin = 'Admin',
  Author = 'Author',
}

registerEnumType(RoleEnum, {
  name: 'RoleEnum',
});

@ObjectType()
export class CreateUserDto {
  @Field()  name: string;
  @Field()  email: string;
  @Field()  password: string;
  @Field(type => RoleEnum) role: RoleEnum;
}
