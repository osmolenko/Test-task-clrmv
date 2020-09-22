import { Injectable } from '@nestjs/common';
import { Post } from '../post/models/post.model';

@Injectable()
export class PostService {
  async findOneById(id: string): Promise<Post> {
    return {} as any;
  }
}
