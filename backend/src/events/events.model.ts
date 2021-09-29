import {
  Table,
  Column,
  DataType,
  Model,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { EventInterface } from './interfaces/event.interface';
import { ExerciseModel } from '../exercise/exercise.model';
import { UsersModel } from '../users/users.model';

@Table({ tableName: 'events' })
export class EventsModel extends Model<EventsModel, EventInterface> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Mon', description: 'Day for event' })
  @Column({ type: DataType.STRING, allowNull: false })
  day: string;

  @ForeignKey(() => UsersModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;
  @BelongsTo(() => UsersModel)
  user: UsersModel;

  @HasMany(() => ExerciseModel)
  exercises: ExerciseModel[];
}
