import { DataTypes } from "sequelize";
import sequelize from "../../database/db";
import { BarnModelType, LogsModelType } from "../types/modelsTypes";

export const Barn: BarnModelType = sequelize.define('Barn', {
  barnNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  maxCapacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [1],
        msg: 'The barn must accept more than one chicken'
      },
    }
  },
  chickensInIt: {
    type: DataTypes.INTEGER,
    validate: {
      lessThanMaxQuantity(value: number) {
        if (value > this.maxCapacity) {
          throw new Error('You cannot add more barns than the maximun capacity');
        }
      }
    }
  }
});

export const Log: LogsModelType = sequelize.define('Logs', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: new Date(),
  },
  eggs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  chickensInIt: {
    type: DataTypes.INTEGER,
  },
});

// Associations
Barn.hasMany(Log);
Log.belongsTo(Barn);