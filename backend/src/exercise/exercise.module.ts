import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { UsersModel } from '../users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}
