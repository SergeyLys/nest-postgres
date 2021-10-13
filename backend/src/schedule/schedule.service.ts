import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ScheduleModel } from './schedule.model';
import { WEEKDAYS } from '../helpers/constants';
import { EventsService } from '../events/events.service';
import { EventsModel } from '../events/events.model';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleModel)
    private scheduleRepository: typeof ScheduleModel,
    private readonly eventsService: EventsService,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    const events = await Promise.all(
      (createScheduleDto.weekdays || WEEKDAYS).map((day) =>
        this.eventsService.createEvent(
          { day, exercises: [] },
          createScheduleDto.userId,
        ),
      ),
    );

    return this.scheduleRepository.create(
      {
        events,
        userId: createScheduleDto.userId,
      },
      { include: [EventsModel] },
    );
  }

  findAll() {
    return `This action returns all schedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }

  findByUser(userId: number) {
    return this.scheduleRepository.findAll({ where: { userId } });
  }
}
