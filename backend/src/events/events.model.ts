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
import { ScheduleModel } from '../schedule/schedule.model';

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

  @ApiProperty({ example: '1', description: 'userId' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ForeignKey(() => ScheduleModel)
  @Column({ type: DataType.INTEGER, allowNull: true })
  scheduleId: number;
  @BelongsTo(() => ScheduleModel)
  schedule: ScheduleModel;

  @HasMany(() => ExerciseModel)
  exercises: ExerciseModel[];
}
