import fs from "fs";
import path from "path"
import { Sequelize } from "sequelize";
import config from "../config";

export const sequelize = new Sequelize(config.DATABASE_NAME!, config.DATABASE_USER!, config.DATABASE_PASSWORD!, {

  host: config.DATABASE_HOST!,
  port: parseInt(config.DATABASE_PORT!, 10),
  dialect: "mysql",
  timezone: "+08:00"

});

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  // Map models
  const modelPath = path.join(__dirname, '/definitions');
  fs.readdir(modelPath, (err, files) => {
    files.forEach(async (file) => {
      const model = await import(`${modelPath}/` + file)
      await model.default.sync()
    })
  })
};