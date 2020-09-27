import {RolesBuilder} from 'nest-access-control';

export enum RoleEnum{
  Admin = 'Admin',
  Author = 'Author',
}

export const roles: RolesBuilder = new RolesBuilder()

roles
  .grant(RoleEnum.Author)
  .createOwn('post')
  .createOwn('comment')
  .updateOwn('post')
  .updateOwn('comment')
  .deleteOwn('post')
  .deleteOwn('comment')
  .grant(RoleEnum.Admin)
  .createAny('post')
  .createAny('comment')
  .updateAny('post')
  .updateAny('comment')
  .deleteAny('post')
  .deleteAny('comment')
