import { RolesInterface } from '../roles.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto implements RolesInterface {
  @ApiProperty({ example: 'ADMIN', description: 'Role value' })
  value: string;
  @ApiProperty({ example: 'Admin', description: 'Role description' })
  description: string;
}
