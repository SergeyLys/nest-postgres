import { PartialType } from '@nestjs/swagger';
import { CreateExerciseDto } from './create-exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  name: string;
  sets: { [key: string]: { [key: string]: number }[] };
}
