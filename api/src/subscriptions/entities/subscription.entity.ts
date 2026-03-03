import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Subscription {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  clientId!: number;

  @Field(() => Int)
  membershipId!: number;

  @Field()
  startDate!: Date;

  @Field()
  endDate!: Date;

  @Field()
  isActive!: boolean;

  @Field()
  qrCode!: string;
}
