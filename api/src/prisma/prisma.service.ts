import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const host = process.env.DATABASE_HOST || 'localhost';
    const port = Number(process.env.DATABASE_PORT) || 3306;
    const user = process.env.DATABASE_USER || 'root';
    const password = process.env.DATABASE_PASSWORD || '';
    const database = process.env.DATABASE_NAME || 'gym_db';

    console.log('Database Configuration:', {
      host,
      port,
      user,
      database,
      hasPassword: !!password,
    });

    const adapter = new PrismaMariaDb({
      host,
      port,
      user,
      password,
      database,
    });

    super({
      adapter,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
