import { Barn, Log } from "./models";

type BarnType = {
  barnNumber: number,
  maxCapacity: number,
  chickensInIt: number,
}

type LogType = {
  BarnId: number,
  type: "add" | "remove",
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

export const logsForBD = (BarnId: number): LogType[] => [
  {
    chickensInIt: 150,
    type: "add",
    date: new Date(),
    eggs: 100,
    BarnId,
  },
  {
    chickensInIt: 150,
    type: "add",
    date: new Date(),
    eggs: 100,
    BarnId,
  },
  {
    chickensInIt: 50,
    type: "add",
    date: new Date(),
    eggs: 10,
    BarnId,
  },
  {
    chickensInIt: 200,
    type: "add",
    date: new Date(),
    eggs: 80,
    BarnId,
  },
  {
    chickensInIt: 200,
    type: "add",
    date: new Date(),
    eggs: 120,
    BarnId,
  },
];

export const setTestingData = () => {
  barnsForBD.forEach(async (barn) => {
    try {
      const barnCreated = await Barn.create(barn);
      logsForBD(barnCreated.getDataValue('id')).forEach((log) => Log.create(log));
    } catch (error) {
      console.log(error);
    }
  })
};
