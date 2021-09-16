import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, MinimalUserCredentialsDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { UsersModel } from '../users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(userCredentials: MinimalUserCredentialsDto) {
    const user = await this.validateUser(userCredentials);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.findByEmail(userDto.email);

    if (candidate) {
      throw new HttpException(
        'User with this email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hash = await bcrypt.hash(userDto.password, 5);

    const user = await this.userService.create({ ...userDto, password: hash });

    return this.generateToken(user);
  }

  private async generateToken(user: UsersModel) {
    const payload = { email: user.email, id: user.id, roles: user.roles };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userCredentials: MinimalUserCredentialsDto) {
    const candidate = await this.userService.findByEmail(userCredentials.email);

    if (!candidate) {
      throw new NotFoundException({
        message: "User with this email doesn't exist",
      });
    }

    const passwordEquals = await bcrypt.compare(
      userCredentials.password,
      candidate.password,
    );

    if (!candidate || !passwordEquals) {
      throw new UnauthorizedException({
        message: 'Email or password is not correct',
      });
    }

    return candidate;
  }
}
