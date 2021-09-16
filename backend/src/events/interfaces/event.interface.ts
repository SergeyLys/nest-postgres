export enum EventTypes {
  GYM_EXERCISE,
}

export interface EventInterface {
  title: string;
  type: EventTypes;
  duration?: number;
  repeatable?: boolean;
  dates: Date[];
  owner: number;
}
