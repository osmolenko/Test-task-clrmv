import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;

  @Column()
  text: string;

  @OneToOne((type) => Comment)
  @JoinColumn()
  comments: Comment;
}
