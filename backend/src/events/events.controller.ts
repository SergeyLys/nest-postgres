import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EventsModel } from './events.model';

@ApiTags('Events')
@Controller('events')
@UseGuards(JwtAuthGuard)
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiOperation({ summary: 'Create event' })
  @ApiResponse({ status: 200, type: EventsModel })
  @Post()
  create(createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }

  @ApiOperation({ summary: 'Get events for user' })
  @ApiResponse({ status: 200, type: [EventsModel] })
  @Get(':userId')
  getEventsByOwner(@Param('userId') ownerId: number) {
    return this.eventsService.getEventsByOwner(ownerId);
  }
}
