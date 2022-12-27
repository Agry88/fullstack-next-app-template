"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
exports.sequelize = new sequelize_1.Sequelize(config_1.default.DATABASE_NAME, config_1.default.DATABASE_USER, config_1.default.DATABASE_PASSWORD, {
    host: config_1.default.DATABASE_HOST,
    port: parseInt(config_1.default.DATABASE_PORT, 10),
    dialect: "mysql",
    timezone: "+08:00"
});
//# sourceMappingURL=index.js.map