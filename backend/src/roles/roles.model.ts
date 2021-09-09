import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { RolesInterface } from './roles.interface';
import { ApiProperty } from '@nestjs/swagger';
import { UsersModel } from '../users/users.model';
import { UserRolesModel } from './user-roles.model';

@Table({ tableName: 'roles' })
export class RolesModel extends Model<RolesModel, RolesInterface> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Role of user' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: 'Admin', description: 'Role description' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => UsersModel, () => UserRolesModel)
  users: UsersModel[];
}
