import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';

enum RoleEnum {
  Admin = 'Admin',
  Author = 'Author',
}

registerEnumType(RoleEnum, {
  name: 'RoleEnum',
});

export default class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsEnum(RoleEnum)
  role: RoleEnum
}
