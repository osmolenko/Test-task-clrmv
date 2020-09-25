import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
import { User } from '../user/user.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {
  }

  async findOne(id: string){
    const post = this.postRepository.findOne(id)
    if(post) return post
  }

  async create(postData:CreatePostDto, user: User){
    const newPost = await this.postRepository.create(({
      ...postData,
      user: user
    }));
    await this.postRepository.save(newPost);
    return newPost.id;
  }

  async delete(data: CreatePostDto){
    await this.postRepository.delete(data.id)
  }



}
