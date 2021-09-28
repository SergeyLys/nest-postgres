import { UsersModel } from '../../users/users.model';
import { ExerciseModel } from '../../exercise/exercise.model';

export interface EventInterface {
  day: string;
  exercises?: ExerciseModel[];
  user?: UsersModel;
}
