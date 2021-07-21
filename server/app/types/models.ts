import { Model, ModelCtor } from "sequelize/types";

export type BarnModelType = ModelCtor<Model<{
  barnNumber: number, 
  maxCapacity: number, 
  chickensInIt?: number,
},
{
  barnNumber: number, 
  maxCapacity: number, 
  chickensInIt: number,
}>>;