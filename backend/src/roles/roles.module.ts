import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesService } from './roles.service';
import { RolesModel } from './roles.model';
import { UsersModel } from '../users/users.model';
import { UserRolesModel } from './user-roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
  imports: [
    SequelizeModule.forFeature([RolesModel, UsersModel, UserRolesModel]),
  ],
})
export class RolesModule {}
