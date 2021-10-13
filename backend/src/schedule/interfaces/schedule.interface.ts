import { EventsModel } from '../../events/events.model';

export interface ScheduleInterface {
  events: EventsModel[];
  userId: number;
}
