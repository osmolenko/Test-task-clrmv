import { Injectable } from '@nestjs/common';
import { Comment } from '../comment/models/comment.model';

@Injectable()
export class CommentService {
  async findOneById(id: string): Promise<Comment> {
    return {} as any;
  }
}
