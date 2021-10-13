import { forwardRef, Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventsModel } from './events.model';
import { AuthModule } from '../auth/auth.module';
import { UsersModel } from '../users/users.model';

@Module({
  providers: [EventsService],
  controllers: [EventsController],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([EventsModel, UsersModel]),
  ],
  exports: [EventsService],
})
export class EventsModule {}
