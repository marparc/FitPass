import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStaffInput {
  @Field()
  email!: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ defaultValue: false })
  isCoach!: boolean;

  @Field({ defaultValue: false })
  isAdmin!: boolean;
}
