import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();

export default {
    dialect: 'mysql',
    schema: './src/schema.ts',
    out: './drizzle',
    dbCredentials: {
        host: process.env.DB_HOST!,
        database: process.env.DB_NAME!,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
    verbose: true,
} satisfies Config;