import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  async findOneById(id: string): Promise<User> {
    return {} as any;
  }
}
