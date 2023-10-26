import { Sequelize } from 'sequelize';
import './loadEnv';

interface ProcessEnv {
  DB_HOST?: string,
  DB_PORT?: number,
  DB_NAME?: string,
  DB_PASSWORD?: string
}

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_PASSWORD
} = process.env as ProcessEnv;

const sequelize = new Sequelize(
  'users',
  DB_NAME as string,
  DB_PASSWORD,
  {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres'
  }
);

export default sequelize;
