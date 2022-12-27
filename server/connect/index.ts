import { Sequelize } from "sequelize";
import config from "../config";

export const sequelize = new Sequelize(config.DATABASE_NAME!, config.DATABASE_USER!, config.DATABASE_PASSWORD!, {

    host: config.DATABASE_HOST!,
    port: parseInt(config.DATABASE_PORT!, 10),
    dialect: "mysql",
    timezone: "+08:00"

});