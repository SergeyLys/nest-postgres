import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModel } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { RolesModel } from './roles/roles.model';
import { UserRolesModel } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { EventsModel } from './events/events.model';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseModel } from './exercise/exercise.model';

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
      models: [
        UsersModel,
        RolesModel,
        UserRolesModel,
        EventsModel,
        ExerciseModel,
      ],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        // force: true,
      },
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    EventsModule,
    ExerciseModule,
  ],
})
export class AppModule {}
