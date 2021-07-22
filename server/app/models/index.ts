import { DataTypes } from "sequelize";
import sequelize from "src/database/db";
import { BarnModelType, LogsModelType } from "../types/models";

export const Barn: BarnModelType = sequelize.define('Barn', {
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

export const Logs: LogsModelType = sequelize.define('Logs', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  eggs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  chickensInIt: {
    type: DataTypes.INTEGER,
  }
});
