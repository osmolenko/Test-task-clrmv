import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { CommentService } from './comment/comment.service';
import { User } from './user/user.entity';
import { Post } from './post/post.entity';
import { Comment } from './comment/comment.entity';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './auth/app.roles';


@Module({
  imports: [
    AccessControlModule.forRoles(roles),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRE: Joi.string().required()
      })
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'osmolenko',
      password: 'mysecretpassword',
      database: 'clearmove',
      entities: [User, Post, Comment],
      synchronize: true,
      logging:true
    }),
    UserModule,
    PostModule,
    CommentModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,ConfigService, UserService, PostService, CommentService, AuthService ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
