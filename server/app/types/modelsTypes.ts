import { Model, ModelStatic } from "sequelize/types";

export type BarnModelType = ModelStatic<Model<{
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

export type LogsModelType = ModelStatic<Model<{
  id: number,
  BarnId: number,
  type: "add" | "remove",
  eggs: number,
  date: string, 
  chickensInIt?: number,
},
{
  eggs: number, 
  BarnId: number,
  type: "add" | "remove",
  date: Date, 
  chickensInIt: number,
}>>;