import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Membership {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field(() => Float)
  price!: number;

  @Field(() => Int)
  duration!: number;

  @Field({ nullable: true })
  description?: string;
}
