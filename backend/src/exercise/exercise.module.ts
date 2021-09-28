import { forwardRef, Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { UsersModel } from '../users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { ExerciseModel } from './exercise.model';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([ExerciseModel]),
  ],
})
export class ExerciseModule {}
