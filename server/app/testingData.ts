type BarnType = {
  barnNumber: number, 
  maxCapacity: number, 
  chickensInIt: number,
}

type LogType = {
  BarnId: number,
  eggs: number, 
  date: Date, 
  chickensInIt: number,
}

export const barnsForBD: BarnType[] = [
  {
  barnNumber: 1,
  maxCapacity: 200,
  chickensInIt: 150,
  },
  {
  barnNumber: 2,
  maxCapacity: 150,
  chickensInIt: 50,
  },
  {
  barnNumber: 3,
  maxCapacity: 200,
  chickensInIt: 200,
  },
];

export const logsForBD: LogType[] = [
  {
    chickensInIt: 150,
    date: new Date(),
    eggs: 100,
    BarnId: 1,
  },
  {
    chickensInIt: 150,
    date: new Date(),
    eggs: 100,
    BarnId: 1,
  },
  {
    chickensInIt: 50,
    date: new Date(),
    eggs: 10,
    BarnId: 1,
  },
  {
    chickensInIt: 200,
    date: new Date(),
    eggs: 80,
    BarnId: 1,
  },
  {
    chickensInIt: 200,
    date: new Date(),
    eggs: 120,
    BarnId: 1,
  },
];
