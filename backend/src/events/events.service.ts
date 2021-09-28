import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventsModel } from './events.model';
import { CreateEventDto } from './dto/create-event.dto';
import { UsersModel } from '../users/users.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventsModel)
    private eventsRepository: typeof EventsModel,
    @InjectModel(UsersModel)
    private usersReposotory: typeof UsersModel,
  ) {}

  async createEvent(createEventDto: CreateEventDto, userId: string) {
    // const role = await this.roleService.getRoleByValue('USER');
    // await user.$set('roles', [role.id]);
    const user = await this.usersReposotory.findOne({ where: { id: userId } });
    const event = await this.eventsRepository.create({
      ...createEventDto,
      user,
    });
    return event;
  }

  getEventsByOwner(ownerId: number) {
    return this.eventsRepository.findAll({ where: { user: ownerId } });
  }
}
