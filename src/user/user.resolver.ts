import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
