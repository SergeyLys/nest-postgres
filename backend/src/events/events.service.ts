import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventsModel } from './events.model';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventsModel)
    private eventsRepository: typeof EventsModel,
  ) {}

  async createEvent(createEventDto: CreateEventDto) {
    // const role = await this.roleService.getRoleByValue('USER');
    // await user.$set('roles', [role.id]);
    return this.eventsRepository.create(createEventDto);
  }

  getEventsByOwner(ownerId: number) {
    return this.eventsRepository.findAll({ where: { owner: ownerId } });
  }
}
