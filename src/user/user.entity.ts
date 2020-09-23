import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';

export enum RoleEnum {
  Admin = 'Admin',
  Author = 'Author',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.Author,
  })
  role: RoleEnum;

  @OneToOne((type) => Post)
  @JoinColumn()
  posts: Post;

  @OneToOne((type) => Comment)
  @JoinColumn()
  comments: Comment;
}
