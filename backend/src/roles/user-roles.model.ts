import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { UsersModel } from '../users/users.model';
import { RolesModel } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRolesModel extends Model<UserRolesModel> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => RolesModel)
  @Column({ type: DataType.NUMBER })
  roleId: number;

  @ForeignKey(() => UsersModel)
  @Column({ type: DataType.NUMBER })
  userId: number;
}
