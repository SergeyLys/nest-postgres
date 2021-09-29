import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ExerciseInterface } from './interfaces/exercise.interface';
import { ApiProperty } from '@nestjs/swagger';
import { EventsModel } from '../events/events.model';
import { UsersModel } from '../users/users.model';

@Table({ tableName: 'exercises' })
export class ExerciseModel extends Model<ExerciseModel, ExerciseInterface> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Squats', description: 'Name of exercise' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  name: string;

  @ApiProperty({
    example: [{ w: 60, r: 10 }],
    description: 'Collection of sets',
  })
  @Column({ type: DataType.ARRAY(DataType.JSON), allowNull: false })
  sets: { [key: string]: number }[];

  @BelongsTo(() => UsersModel)
  user: UsersModel;

  @ForeignKey(() => UsersModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => EventsModel)
  event: EventsModel;

  @ForeignKey(() => EventsModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  eventId: number;
}
