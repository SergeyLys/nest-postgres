import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ExerciseModel } from './exercise.model';
import { EventsService } from '../events/events.service';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(ExerciseModel)
    private exerciseRepository: typeof ExerciseModel,
    private readonly eventsService: EventsService,
  ) {}
  async create({ name, sets, eventName }: CreateExerciseDto, userId: number) {
    const [event] = await this.eventsService.getEventByDay(eventName, userId);
    return this.exerciseRepository.create({
      name,
      sets,
      eventId: event.id,
      userId,
    });
  }

  findAll() {
    return this.exerciseRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
