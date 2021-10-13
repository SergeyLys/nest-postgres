import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModel } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { EventsModel } from './events/events.model';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseModel } from './exercise/exercise.model';
import { ScheduleModule } from './schedule/schedule.module';
import { ScheduleModel } from './schedule/schedule.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: Number(process.env.POSTGRES_PORT),
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UsersModel, EventsModel, ExerciseModel, ScheduleModel],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        // force: true,
      },
    }),
    UsersModule,
    AuthModule,
    EventsModule,
    ExerciseModule,
    ScheduleModule,
  ],
})
export class AppModule {}
