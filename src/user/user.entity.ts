import {
  Column,
  Entity,
 OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import {RoleEnum} from '../auth/app.roles';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id?: string;

  @Column()
  @Field()
  name: string;

  @Column({unique:true})
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.Author,
  })
  @Field()
  role: RoleEnum;

  @Field(type=>[Post])
  posts: Post[];

  @Field(type=>[Comment])
  comments: Comment[];
}
