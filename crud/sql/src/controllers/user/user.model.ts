import { DataTypes } from "sequelize";
import { SqlModel } from "@mayajs/sql";

const schema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export default SqlModel("User", schema, {});
