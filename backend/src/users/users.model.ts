import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserInterface } from './interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { ExerciseModel } from '../exercise/exercise.model';
import { EventsModel } from '../events/events.model';

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

  @HasMany(() => EventsModel)
  events: EventsModel[];

  @HasMany(() => ExerciseModel)
  exercises: ExerciseModel[];
}
