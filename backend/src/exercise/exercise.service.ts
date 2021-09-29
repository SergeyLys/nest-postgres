import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ExerciseModel } from './exercise.model';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(ExerciseModel)
    private exerciseRepository: typeof ExerciseModel,
  ) {}
  create(createExerciseDto: CreateExerciseDto, userId: number) {
    return this.exerciseRepository.create({
      ...createExerciseDto,
      userId,
    });
  }

  findAll() {
    return this.exerciseRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
