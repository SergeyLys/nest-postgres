import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EventsModel } from './events.model';
import { User } from '../users/user.decorator';

@ApiTags('Events')
@Controller('events')
@UseGuards(JwtAuthGuard)
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiOperation({ summary: 'Create event' })
  @ApiResponse({ status: 200, type: EventsModel })
  @Post()
  create(@Body() createEventDto: CreateEventDto, @User('id') userId) {
    return this.eventsService.createEvent(createEventDto, userId);
  }

  @ApiOperation({ summary: 'Get event by day' })
  @ApiResponse({ status: 200, type: EventsModel })
  @Get(':day')
  getEventByDay(@User('id') userId: number, @Param('day') day: string) {
    return this.eventsService.getEventByDay(day, userId);
  }

  @ApiOperation({ summary: 'Get events for user' })
  @ApiResponse({ status: 200, type: [EventsModel] })
  @Get()
  getAllUsersEvents(@User('id') ownerId: number) {
    return this.eventsService.getEventsByOwner(ownerId);
  }
}
