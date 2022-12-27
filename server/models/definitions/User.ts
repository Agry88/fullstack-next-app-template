import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from "../../connect";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    user_id: CreationOptional<Number>,
    user_name: string,
    password: string,
    email: string
  }

const UserModel = sequelize.define<UserModel>("User", {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    email: {
        type: DataTypes.CHAR,
        unique: true,
        allowNull: false
    },
})

export default UserModel;