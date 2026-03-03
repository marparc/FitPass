import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Staff {
  @Field(() => Int)
  id!: number;

  @Field()
  email!: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field()
  dateHired!: Date;

  @Field()
  isCoach!: boolean;

  @Field()
  isAdmin!: boolean;
}
