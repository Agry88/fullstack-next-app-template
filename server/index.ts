import User from "./models/definitions/user";
import { sequelize } from "./connect";

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  // Map models
  await User.sync()
};