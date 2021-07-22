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
  eggs: number, 
  date: number, 
  chickensInIt?: number,
},
{
  eggs: number, 
  date: number, 
  chickensInIt: number,
}>>;