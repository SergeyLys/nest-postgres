import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventsModel } from './events.model';

@Module({
  providers: [EventsService],
  controllers: [EventsController],
  imports: [SequelizeModule.forFeature([EventsModel])],
})
export class EventsModule {}
