import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { EventInterface, EventTypes } from './interfaces/event.interface';

@Table({ tableName: 'users' })
export class EventsModel extends Model<EventsModel, EventInterface> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Test event', description: 'Event title' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    example: EventTypes.GYM_EXERCISE,
    description: 'Type of event',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  type: EventTypes;

  @ApiProperty({ example: [Date.now()], description: 'Dates for event' })
  @Column({ type: DataType.ARRAY(DataType.DATE), allowNull: false })
  dates: Date[];

  @ApiProperty({ example: true, description: 'Should repeat' })
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  repeatable: boolean;

  @ApiProperty({ example: true, description: 'Duration of event' })
  @Column({ type: DataType.NUMBER, allowNull: true })
  duration: number;

  @Column({ type: DataType.NUMBER, allowNull: false })
  owner: number;
}
