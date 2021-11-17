import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ExerciseModel } from './exercise.model';
import { EventsService } from '../events/events.service';
import { EventsModel } from '../events/events.model';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(ExerciseModel)
    private exerciseRepository: typeof ExerciseModel,
    private readonly eventsService: EventsService,
  ) {}
  async create({ eventId, date }: CreateExerciseDto, userId: number) {
    const event = await this.eventsService.getEventsById(eventId);
    return this.exerciseRepository.create({
      name: '',
      sets: { [date]: [{ w: 0, r: 0 }] },
      eventId: event.id,
      userId,
    });
  }

  findAll() {
    return this.exerciseRepository.findAll();
  }

  findOne(id: number) {
    return this.exerciseRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(id: number, updateExerciseDto: UpdateExerciseDto) {
    console.log(updateExerciseDto);
    return this.exerciseRepository.update(updateExerciseDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.exerciseRepository.destroy({
      where: { id },
    });
  }
}
