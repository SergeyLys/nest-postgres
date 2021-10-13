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
import { ScheduleService } from './schedule.service';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { EventsService } from '../events/events.service';
import { WEEKDAYS } from '../helpers/constants';
import { User } from '../users/user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('schedule')
@UseGuards(JwtAuthGuard)
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(
    @Body() createScheduleDto: { weekdays: string[] },
    @User('id') userId,
  ) {
    return this.scheduleService.create({ ...createScheduleDto, userId });
  }

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get('/by-user')
  findByUser(@User('id') userId: number) {
    return this.scheduleService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.scheduleService.update(+id, updateScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(+id);
  }
}
