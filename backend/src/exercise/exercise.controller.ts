import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { User } from '../users/user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('exercise')
@UseGuards(JwtAuthGuard)
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  async create(
    @Body()
    createExerciseDto: CreateExerciseDto,
    @User('id') userId,
  ) {
    return this.exerciseService.create({ ...createExerciseDto }, userId);
  }

  @Get()
  findAll() {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.exerciseService.update(+id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseService.remove(+id);
  }
}
