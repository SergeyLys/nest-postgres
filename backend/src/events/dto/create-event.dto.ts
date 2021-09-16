import { ApiProperty } from '@nestjs/swagger';
import { EventInterface, EventTypes } from '../interfaces/event.interface';

export class CreateEventDto implements EventInterface {
  @ApiProperty({ example: 'Test event', description: 'Event title' })
  title: string;
  @ApiProperty({
    example: EventTypes.GYM_EXERCISE,
    description: 'Type of event',
  })
  type: EventTypes;
  @ApiProperty({ example: [Date.now()], description: 'Dates for event' })
  dates: Date[];
  @ApiProperty({ example: 'User id', description: 'Dates for event' })
  owner: number;
  @ApiProperty({ example: true, description: 'Should repeat' })
  repeatable: boolean;
}
