import {
  Column, CreateDateColumn,
  Entity, ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity('post')
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne((type) => User, user=>user.posts)
  @Field(type=>User)
  user: User;

  @Column()
  @Field()
  text: string;

  @OneToMany((type) => Comment, comment=>comment.post)
  @Field(type=>[Comment])
  comments: Comment;

  @CreateDateColumn({name:'created'})
  @Field()
  created: Date;
}
