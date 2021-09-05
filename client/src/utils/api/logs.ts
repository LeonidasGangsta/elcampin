import { LogsType } from '../types';
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
