import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserInterface } from './interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { RolesModel } from '../roles/roles.model';
import { UserRolesModel } from '../roles/user-roles.model';

@Table({ tableName: 'users' })
export class UsersModel extends Model<UsersModel, UserInterface> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'test@mail.com', description: 'Uniq id' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '123', description: 'Users password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'Name', description: 'Users name' })
  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @ApiProperty({ example: false, description: 'Is user banned' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'Spam', description: 'Description of users ban' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => RolesModel, () => UserRolesModel)
  roles: RolesModel[];
}
