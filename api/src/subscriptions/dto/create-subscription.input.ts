import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubscriptionInput {
  @Field(() => Int)
  clientId!: number;

  @Field(() => Int)
  membershipId!: number;

  @Field()
  endDate!: Date;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field()
  qrCode!: string;
}
