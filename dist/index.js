"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = void 0;
const user_1 = __importDefault(require("./models/definitions/user"));
const connect_1 = require("./connect");
const initDB = async () => {
    await connect_1.sequelize.authenticate();
    await connect_1.sequelize.sync({ alter: true });
    // Map models
    await user_1.default.sync();
};
exports.initDB = initDB;
//# sourceMappingURL=index.js.map