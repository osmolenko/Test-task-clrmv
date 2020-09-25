import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createuser.dto';
import { userInput } from './input/user.input';
import { User } from './user.entity';

@Resolver((of=>User))
export class UsersResolver {
  constructor(private userService: UserService) {
  }

}
