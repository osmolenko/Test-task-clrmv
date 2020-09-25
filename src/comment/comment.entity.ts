import {
  Column, CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from '../post/post.entity';
import { User } from '../user/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity('comment')
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne((type) => Post, post=>post.comments)
  @Field(type=>Post)
  post: Post;

  @ManyToOne((type) => User, user=>user.comments)
  @Field(type=>User)
  author: User;

  @Column()
  @Field()
  text: string;

  @CreateDateColumn({name:'created'})
  @Field()
  created: Date;
}
