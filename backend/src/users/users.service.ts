import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsersModel } from './users.model';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersModel)
    private userModel: typeof UsersModel,
    private roleService: RolesService,
  ) {}

  async create(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async findAll() {
    return await this.userModel.findAll({ include: { all: true } });
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ where: { email }, include: { all: true } });
  }
}
