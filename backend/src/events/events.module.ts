import { forwardRef, Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventsModel } from './events.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [EventsService],
  controllers: [EventsController],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([EventsModel]),
  ],
})
export class EventsModule {}
