import { Body, Controller, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import ReqUser from './reqUser.interface';
import { localAuthGuard } from './auth.guard';
import JwtStrategy from './jwtAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}


  @Post('register')
  async register(@Body() regData:RegisterDto){
    console.log(regData)
    return this.authService.register(regData)
  }

  @HttpCode(200)
  @UseGuards(localAuthGuard)
  @Post('login')
  async logIn(@Req() request: ReqUser) {
    const {user} = request;
    const cookie = this.authService.getCookies(user.id);
    request.res.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return user;
  }

  @UseGuards(JwtStrategy)
  @Post('logout')
  async logOut(@Req() request: ReqUser) {
    request.res.setHeader('Set-Cookie', this.authService.logOut());
  }



}
