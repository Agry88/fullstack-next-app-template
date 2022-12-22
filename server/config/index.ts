import dotenv from "dotenv";
dotenv.config();

const config = {
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_NAME: process.env.DATABASE_NAME,
  BACKEND_PORT: process.env.BACKEND_PORT,
  BACKEND_HOST: process.env.BACKEND_HOST,
}

export default config;