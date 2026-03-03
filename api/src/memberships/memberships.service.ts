import { Injectable } from '@nestjs/common';
import { CreateMembershipInput } from './dto/create-membership.input';
import { UpdateMembershipInput } from './dto/update-membership.input';

@Injectable()
export class MembershipsService {
  create(createMembershipInput: CreateMembershipInput) {
    return 'This action adds a new membership';
  }

  findAll() {
    return `This action returns all memberships`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membership`;
  }

  update(id: number, updateMembershipInput: UpdateMembershipInput) {
    return `This action updates a #${id} membership`;
  }

  remove(id: number) {
    return `This action removes a #${id} membership`;
  }
}
