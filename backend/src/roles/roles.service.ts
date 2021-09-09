import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesModel } from './roles.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(RolesModel)
    private roleRepository: typeof RolesModel,
  ) {}

  async createRole(role: CreateRoleDto) {
    return this.roleRepository.create(role);
  }

  async getRoleByValue(value: string) {
    return this.roleRepository.findOne({
      where: {
        value,
      },
    });
  }
}
