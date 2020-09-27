import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreateCommentDto } from './dto/createComment.dto';
import { Post } from '../post/post.entity';
import { PostService } from '../post/post.service';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>,) {}

  async findOne(id: string){
    const comment = this.commentRepository.findOne(id)
    if(comment) return comment
  }

  async create(commentData:CreateCommentDto, post: Post, user: User){
    console.log(post)
    const newComment = await this.commentRepository.create(({
      ...commentData,
      post: post,
      author: user,
    }));
    await this.commentRepository.save(newComment);
    return newComment.id;
  }

  async delete(data: CreateCommentDto){
    await this.commentRepository.delete(data.id)
  }

}
