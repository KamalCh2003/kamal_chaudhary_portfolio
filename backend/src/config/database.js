import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg2 from 'pg';

const { Pool } = pkg2;
const { PrismaClient } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });