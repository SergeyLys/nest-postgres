import { ExerciseInterface } from '../../exercise/interfaces/exercise.interface';

export interface EventInterface {
  day: string;
  exercises?: ExerciseInterface[];
  owner?: number;
}
