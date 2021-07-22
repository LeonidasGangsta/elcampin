import { DataTypes } from "sequelize";
import sequelize from "src/database/db";
import { BarnModelType } from "../types/models";

const Barn: BarnModelType = sequelize.define('Barn', {
  barnNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  maxCapacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  chickensInIt: {
    type: DataTypes.INTEGER,
  }
});

export default Barn;