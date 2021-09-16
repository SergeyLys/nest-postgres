import { UserInterface } from '../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class MinimalUserCredentialsDto implements UserInterface {
  @ApiProperty({ example: 'test@mail.com', description: 'Uniq id' })
  email: string;
  @ApiProperty({ example: '123', description: 'Users password' })
  password: string;
}

export class CreateUserDto extends MinimalUserCredentialsDto {
  @ApiProperty({ example: 'test@mail.com', description: 'Uniq id' })
  email: string;
  @ApiProperty({ example: 'Name', description: 'Users name' })
  name: string;
  @ApiProperty({ example: '123', description: 'Users password' })
  password: string;
}
