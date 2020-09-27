import { Request } from 'express';
import {User} from '../user/user.entity';

interface ReqUser extends Request {
  user: User;
}

export default ReqUser;
