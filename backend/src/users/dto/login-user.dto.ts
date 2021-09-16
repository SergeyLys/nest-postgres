import { UserInterface } from '../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto implements UserInterface {
  @ApiProperty({ example: 'test@mail.com', description: 'Uniq id' })
  email: string;
  @ApiProperty({ example: '123', description: 'Users password' })
  password: string;
}
