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
import { EventsModel } from '../events/events.model';

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
  async update(
    @Param('id') id: number,
    @Body() updateExerciseDto: UpdateExerciseDto,
    @User('id') userId: number,
  ) {
    // const currentDate = `${new Date().getFullYear()}-${
    //   new Date().getMonth() + 1
    // }-${new Date().getDate()}`;
    // const foundItem = await this.exerciseService.findOne(id);
    //
    // if (foundItem) {
    //   const today = new Date().getTime();
    //   const currentWeekday = new Intl.DateTimeFormat('en-US', {
    //     weekday: 'short',
    //   }).format(new Date());
    //   const isSameDay = currentWeekday === foundItem.event.day;
    //   const isCreatedToday = new Date(foundItem.createdAt).getDate() === today;
    //
    //   if (isSameDay && !isCreatedToday) {
    //     return this.exerciseService.create(
    //       {
    //         ...updateExerciseDto,
    //         eventId: foundItem.eventId,
    //       },
    //       userId,
    //     );
    //   }
    // }
    return this.exerciseService.update(+id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseService.remove(+id);
  }
}
