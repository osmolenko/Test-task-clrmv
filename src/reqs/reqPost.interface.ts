import { Request } from 'express';
import { Post } from '../post/post.entity';

interface ReqPost extends Request {
  post: Post;
}

export default ReqPost;
