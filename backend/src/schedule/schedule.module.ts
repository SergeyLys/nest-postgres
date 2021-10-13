import { forwardRef, Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { EventsModule } from '../events/events.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ScheduleModel } from './schedule.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => EventsModule),
    SequelizeModule.forFeature([ScheduleModel]),
  ],
})
export class ScheduleModule {}
