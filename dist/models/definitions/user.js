"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect_1 = require("../../connect");
const UserModel = connect_1.sequelize.define("User", {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.CHAR,
        unique: true,
        allowNull: false
    },
});
exports.default = UserModel;
//# sourceMappingURL=user.js.map