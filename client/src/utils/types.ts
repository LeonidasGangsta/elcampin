export interface BarnsType {
  id: number,
  barnNumber: number,
  chickensInIt: number,
  maxCapacity: number,
  createdAt: string,
  updatedAt: string,
}

export type CreateBarnType = {
  barnNumber: number,
  maxCapacity: number,
  chickensInIt: number,
};

export interface LogsType {
  id: number,
  BarnId: number,
  eggs: number,
  date: string,
  chickensInIt?: number,
  createdAt: string,
  updatedAt: string,
}
