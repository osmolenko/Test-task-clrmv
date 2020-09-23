import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../post/post.entity';
import { User } from '../user/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne((type) => Post)
  @JoinColumn()
  post: Post;

  @OneToOne((type) => User)
  @JoinColumn()
  author: User;

  @Column()
  text: string;
}
