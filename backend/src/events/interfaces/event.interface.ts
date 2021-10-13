import { ExerciseModel } from '../../exercise/exercise.model';

export interface EventInterface {
  day: string;
  exercises?: ExerciseModel[];
  userId?: number;
  scheduleId?: number;
}
