import { ApiProperty } from '@nestjs/swagger';
import { EventInterface } from '../interfaces/event.interface';
import { ExerciseModel } from '../../exercise/exercise.model';

export class CreateEventDto implements EventInterface {
  @ApiProperty({ example: 'Mon', description: 'Day of event' })
  day: string;

  @ApiProperty({
    example: `[{name: '', data: [{r: 0, w: 0}]}]`,
    description: 'Exercises array',
  })
  exercises: ExerciseModel[];

  @ApiProperty({
    example: `1`,
    description: 'Schedule that the event belongs to',
  })
  scheduleId: number;
}
