import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModel } from './users.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([UsersModel]),
  ],
})
export class UsersModule {}
