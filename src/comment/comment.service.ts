import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  async findOneById(id: string): Promise<Comment> {
    return {} as any;
  }
}
