import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ScheduleInterface } from './interfaces/schedule.interface';
import { ApiProperty } from '@nestjs/swagger';
import { UsersModel } from '../users/users.model';
import { EventsModel } from '../events/events.model';

@Table({ tableName: 'schedule' })
export class ScheduleModel extends Model<ScheduleModel, ScheduleInterface> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @BelongsTo(() => UsersModel)
  user: UsersModel;

  @ForeignKey(() => UsersModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @HasMany(() => EventsModel)
  events: EventsModel[];
}
