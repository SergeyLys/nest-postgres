export interface ExerciseInterface {
  name: string;
  sets: { [key: string]: number }[];
  userId: number;
  eventId: number;
}
