import { Model, ModelCtor } from "sequelize/types";

export type BarnModelType = ModelCtor<Model<{
  barNumber: number, 
  maxCapacity: number, 
  chickensInIt?: number,
},
{
  barNumber: number, 
  maxCapacity: number, 
  chickensInIt: number,
}>>;