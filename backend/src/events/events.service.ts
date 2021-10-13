import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventsModel } from './events.model';
import { CreateEventDto } from './dto/create-event.dto';
import { ExerciseModel } from '../exercise/exercise.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventsModel)
    private eventsRepository: typeof EventsModel,
  ) {}

  async createEvent(createEventDto: CreateEventDto, userId: number) {
    const event = await this.eventsRepository.create({
      ...createEventDto,
      userId,
    });
    return event;
  }

  getEventByDay(day: string, userId: number) {
    return this.eventsRepository.findOrCreate({
      where: { day, userId },
      include: [ExerciseModel],
    });
  }

  getEventsByOwner(ownerId: number) {
    return this.eventsRepository.findAll({
      where: { userId: ownerId },
      include: [ExerciseModel],
    });
  }
}
