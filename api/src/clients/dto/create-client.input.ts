import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field({ description: 'Client name' })
  name!: string;

  @Field({ description: 'Client email' })
  email!: string;

  @Field({ description: 'Client phone number' })
  phone!: string;
}
