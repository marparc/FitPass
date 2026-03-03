import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateMembershipInput {
  @Field()
  name!: string;

  @Field(() => Float)
  price!: number;

  @Field(() => Int)
  duration!: number;

  @Field({ nullable: true })
  description?: string;
}
