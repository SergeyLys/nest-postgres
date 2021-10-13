export class CreateExerciseDto {
  name: string;
  sets: { [key: string]: number }[];
  eventName: string;
}
