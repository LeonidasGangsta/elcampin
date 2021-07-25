import { Model, ModelCtor } from "sequelize/types";

export type BarnModelType = ModelCtor<Model<{
  id: number,
  barnNumber: number, 
  maxCapacity: number, 
  chickensInIt?: number,
},
{
  barnNumber: number, 
  maxCapacity: number, 
  chickensInIt: number,
}>>;

export type LogsModelType = ModelCtor<Model<{
  id: number,
  BarnId: number,
  eggs: number, 
  date: string, 
  chickensInIt?: number,
},
{
  eggs: number, 
  date: Date, 
  chickensInIt: number,
  BarnId: number,
}>>;