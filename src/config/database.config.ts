import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from './config.type';

export default registerAs<DatabaseConfig>('database', () => ({
  url: process.env.DATABASE_URL,
  type: process.env.DATABASE_TYPE,
  name: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATA_USERNAME,
  password: process.env.DATA_PASSWORD,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
}));
