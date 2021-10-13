import { forwardRef, Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { ExerciseModel } from './exercise.model';
import { EventsModule } from '../events/events.module';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService],
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => EventsModule),
    SequelizeModule.forFeature([ExerciseModel]),
  ],
})
export class ExerciseModule {}
