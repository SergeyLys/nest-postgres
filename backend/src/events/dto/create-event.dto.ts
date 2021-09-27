import { ApiProperty } from '@nestjs/swagger';
import { EventInterface } from '../interfaces/event.interface';

export class CreateEventDto implements EventInterface {
  @ApiProperty({ example: 'Mon', description: 'Day of event' })
  day: string;
}
