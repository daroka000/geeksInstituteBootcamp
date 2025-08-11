import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    client: process.env.DATABASE_CLIENT || 'pg',
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'notes_app'
    },
    migrations: {
      directory: './server/migrations'
    }
  }
};