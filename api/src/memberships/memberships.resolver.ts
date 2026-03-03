import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MembershipsService } from './memberships.service';
import { Membership } from './entities/membership.entity';
import { CreateMembershipInput } from './dto/create-membership.input';
import { UpdateMembershipInput } from './dto/update-membership.input';

@Resolver(() => Membership)
export class MembershipsResolver {
  constructor(private readonly membershipsService: MembershipsService) {}

  @Mutation(() => Membership)
  createMembership(@Args('createMembershipInput') createMembershipInput: CreateMembershipInput) {
    return this.membershipsService.create(createMembershipInput);
  }

  @Query(() => [Membership], { name: 'memberships' })
  findAll() {
    return this.membershipsService.findAll();
  }

  @Query(() => Membership, { name: 'membership' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.membershipsService.findOne(id);
  }

  @Mutation(() => Membership)
  updateMembership(@Args('updateMembershipInput') updateMembershipInput: UpdateMembershipInput) {
    return this.membershipsService.update(updateMembershipInput.id, updateMembershipInput);
  }

  @Mutation(() => Membership)
  removeMembership(@Args('id', { type: () => Int }) id: number) {
    return this.membershipsService.remove(id);
  }
}
