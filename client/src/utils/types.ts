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
