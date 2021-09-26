import { CreateLogType, LogsType } from '../types';
import { httpHelper } from './httpHelper';

export const getAllLogs = async () => {
  try {
    const { data } = await httpHelper.get('/logs');
    const logs: LogsType[] = [...data];
    return logs;
  } catch (error) {
    return [];
  }
};

export const createNewLog = async (log: CreateLogType) => {
  try {
    const { data } = await httpHelper.post('/logs/create', { log });
    const logCreated: LogsType = data?.log;
    return logCreated;
  } catch (error) {
    throw Error('An error ocurred creating a new log');
  }
};
